import React, { createContext, useContext, useMemo } from 'react'
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { API_HOST } from 'config/env'
import { useAuthContext } from './authProvider'

export interface HttpConstruct {
  client: AxiosInstance
}

export const HttpContext = createContext({} as HttpConstruct)
export const useHttpContext = () => useContext(HttpContext)

interface HttpProviderProps {
  children: React.ReactNode
}

const HttpProvider = ({ children }: HttpProviderProps) => {
  const { accessToken, logout } = useAuthContext()
  const client = useMemo(() => {
    const client = axios.create({
      baseURL: API_HOST,
      headers: {
        Accept: 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      },
    })

    client.interceptors.request.use((config: AxiosRequestConfig) => {
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
      }
      return config
    })

    client.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error?.response?.status === 403) {
          logout()
        }
      },
    )

    return client
  }, [accessToken, logout])

  const value = {
    client,
  }

  return <HttpContext.Provider value={value}>{children}</HttpContext.Provider>
}

export default HttpProvider
