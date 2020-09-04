import React, { useContext, createContext, useState } from 'react'

export interface AuthConstruct {
  token: string | null
}

export const AuthContext = createContext({} as AuthConstruct)
export const useAuthContext = () => useContext(AuthContext)

interface AuthProviderProps {
  children: React.ReactNode
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState<string | null>(null)
  const value = {
    token,
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
