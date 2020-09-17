import React, { useContext, createContext, useState, useCallback } from 'react'
import axios, { AxiosResponse } from 'axios'
import { API_HOST } from 'config/env'
import { ExchangeTokenDTO } from 'types/dto'
import { handleAxiosError } from 'util/functions'

export interface AuthUser {
  username: string
}

export interface AuthConstruct {
  accessToken: string | null
  authUser: AuthUser | null
  logout: () => void
  exchangeToken: (token: string) => Promise<void>
}

export const AuthContext = createContext({} as AuthConstruct)
export const useAuthContext = () => useContext(AuthContext)

interface AuthProviderProps {
  children: React.ReactNode
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [accessToken, setAccessToken] = useState<string | null>(null)
  const [authUser, setAuthUser] = useState<AuthUser | null>(null)

  const logout = useCallback(() => {
    setAccessToken(null)
    setAuthUser(null)
  }, [])

  const exchangeToken = useCallback(async (token: string) => {
    try {
      const { data } = (await axios.get(
        `${API_HOST}/auth/exchangetoken?token=${token}`,
      )) as AxiosResponse<ExchangeTokenDTO>
      setAccessToken(data.jwt)
      setAuthUser({ username: data.user.username } as AuthUser)
    } catch (e) {
      handleAxiosError(e)
      return Promise.reject()
    }
  }, [])

  const value = {
    accessToken,
    authUser,
    logout,
    exchangeToken,
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
