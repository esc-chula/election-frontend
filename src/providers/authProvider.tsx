import React, { useContext, createContext, useCallback, useEffect } from 'react'
import axios from 'axios'
import { API_HOST } from 'config/env'
import { ExchangeTokenDTO } from 'types/dto'
import { handleAxiosError } from 'util/functions'
import { useLocalStorageState, useNewRedirect } from 'util/hooks'
import useSWR from 'swr'
import { Redirect, useHistory } from 'react-router-dom'
import PageLoading from 'components/PageLoading'
import { StrapiUser } from 'types/strapi'

export interface AuthConstruct {
  isPending: boolean
  isAuthenticated: boolean
  accessToken: string | null
  authUser: StrapiUser
  mutateUser: (
    cmd: string,
    partialUser: Partial<StrapiUser>,
  ) => Promise<StrapiUser>
  logout: () => void
  exchangeToken: (token: string) => Promise<void>
}

export const AuthContext = createContext({} as AuthConstruct)
export const useAuthContext = () => useContext(AuthContext)

interface AuthProviderProps {
  children: React.ReactNode
}

async function fetchAuthUser(accessToken: string): Promise<StrapiUser | null> {
  const response = await axios.get<StrapiUser>(`${API_HOST}/users/me`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
  return response.data
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [accessToken, setAccessToken] = useLocalStorageState('accessToken')
  const { data: authUser, mutate: mutateAuthUser, error } = useSWR(
    accessToken,
    fetchAuthUser,
  )

  const isPending = !!accessToken && !authUser && !error

  const logout = useCallback(() => {
    setAccessToken(null)
    mutateAuthUser(null)
  }, [setAccessToken, mutateAuthUser])

  const exchangeToken = useCallback(
    async (token: string) => {
      try {
        const { data } = await axios.get<ExchangeTokenDTO>(
          `${API_HOST}/auth/exchangetoken?token=${token}`,
        )
        setAccessToken(data.jwt)
        mutateAuthUser(data.user, false)
      } catch (e) {
        handleAxiosError(e)
        return Promise.reject()
      }
    },
    [setAccessToken, mutateAuthUser],
  )

  const mutateUser = useCallback(
    async (cmd: string, partialUser: Partial<StrapiUser>) => {
      await axios.put(`${API_HOST}/users/${cmd}`, partialUser, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      return mutateAuthUser((user) => ({ ...user, ...partialUser }), false)
    },
    [accessToken, authUser, mutateAuthUser],
  )

  const value = {
    isPending,
    isAuthenticated: !!authUser,
    accessToken,
    // authUser is only used in pages with a guarded check
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    authUser: authUser!,
    mutateUser,
    logout,
    exchangeToken,
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider

export function withAuth<P>(
  ComposedComponent: React.ComponentType<P>,
): React.ComponentType<P> {
  return function WithAuth(props: P) {
    const { isPending, isAuthenticated } = useAuthContext()
    const history = useHistory()
    const redirect = useNewRedirect()

    useEffect(() => {
      if (!isPending && !isAuthenticated) {
        history.replace(`/login${redirect}`)
      }
    }, [isPending, isAuthenticated, history, redirect])

    if (isAuthenticated) {
      return <ComposedComponent {...props} />
    }

    return <PageLoading />
  }
}

export function withAccepted<P>(
  ComposedComponent: React.ComponentType<P>,
): React.ComponentType<P> {
  return withAuth(function WithAccepted(props: P) {
    const { authUser } = useAuthContext()

    if (!authUser.ruleAccepted) {
      return <Redirect to="/profile" />
    }

    return <ComposedComponent {...props} />
  })
}
