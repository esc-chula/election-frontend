import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import qs from 'query-string'

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height,
  }
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  )

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowDimensions
}

export const useQueryString = () => {
  const { search } = useLocation()
  return qs.parse(search)
}

export function useLocalStorageState(
  key: string,
): [string | null, Dispatch<SetStateAction<string | null>>] {
  const [actualKey] = useState(key)
  const [value, setValue] = useState<string | null>(() =>
    localStorage.getItem(actualKey),
  )

  useEffect(() => {
    if (value) {
      localStorage.setItem(actualKey, value)
    }
  }, [actualKey, value])

  return [value, setValue]
}

export function useNewRedirect() {
  const { pathname } = useLocation()
  const query = useQueryString()

  const redirectParam = query.r ? `?r=${query.r}` : ''
  return `?r=${pathname}${redirectParam}`
}

export function useRedirectPath(defaultPath: string) {
  const query = useQueryString()
  return query.r || defaultPath
}
