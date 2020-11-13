import React, { createContext, useContext, useMemo } from 'react'
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { API_HOST } from 'config/env'
import { useAuthContext } from './authProvider'
import { SWRConfig } from 'swr'

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
        return Promise.reject(error)
      },
    )

    return client
  }, [accessToken, logout])

  const fetcher = useMemo(() => {
    return async function fetch<T>(key: string): Promise<T> {
      const response = await client.get(key)
      return response.data
    }
  }, [client])

  return (
    <HttpContext.Provider value={{ client }}>
      <SWRConfig value={{ fetcher }}>{children}</SWRConfig>
    </HttpContext.Provider>
  )
}

export default HttpProvider
