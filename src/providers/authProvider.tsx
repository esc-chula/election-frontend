import React, { useContext, createContext, useState, useCallback } from 'react'
import axios from 'axios'
import { API_HOST } from 'config/env'
import { ExchangeTokenDTO } from 'types/dto'
import { handleAxiosError } from 'config/util'

export interface AuthUser {
  username: string
}

export interface AuthConstruct {
  token: string | null
  authUser: AuthUser | null
  logout: () => void
  exchangeTicket: (token: string) => void
}

export const AuthContext = createContext({} as AuthConstruct)
export const useAuthContext = () => useContext(AuthContext)

interface AuthProviderProps {
  children: React.ReactNode
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState<string | null>(null)
  const [authUser, setAuthUser] = useState<AuthUser | null>(null)

  const logout = useCallback(() => {
    setToken(null)
    setAuthUser(null)
  }, [])

  const exchangeTicket = useCallback(async (token: string) => {
    try {
      const data: ExchangeTokenDTO = await axios.post(
        `${API_HOST}/auth/exchangetoken?token=${token}`,
      )
      setToken(data.jwt)
      setAuthUser({ username: data.user.username } as AuthUser)
    } catch (e) {
      handleAxiosError(e)
    }
  }, [])

  const value = {
    token,
    authUser,
    logout,
    exchangeTicket,
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
