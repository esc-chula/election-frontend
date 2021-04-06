import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import qs from 'query-string'
import { StrapiUser } from 'types/strapi'
import { useAuthContext } from 'providers/authProvider'
import { useColorModeValue } from '@chakra-ui/react'

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
    } else {
      localStorage.removeItem(actualKey)
    }
  }, [actualKey, value])

  return [value, setValue]
}

export function useSessionStorageState(
  key: string,
): [string | null, Dispatch<SetStateAction<string | null>>] {
  const [actualKey] = useState(key)
  const [value, setValue] = useState<string | null>(() =>
    sessionStorage.getItem(actualKey),
  )

  useEffect(() => {
    if (value) {
      sessionStorage.setItem(actualKey, value)
    } else {
      sessionStorage.removeItem(actualKey)
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

export function usePatchUser(
  cmd: string,
  partialUser: Partial<StrapiUser>,
  redirect: string,
): [boolean, () => Promise<void>] {
  const [loading, setLoading] = useState(false)
  const { mutateUser } = useAuthContext()
  const { push } = useHistory()

  return [
    loading,
    useCallback(async () => {
      setLoading(true)
      try {
        await mutateUser(cmd, partialUser)
        push(redirect)
      } finally {
        setLoading(false)
      }
    }, [mutateUser, push, redirect]),
  ]
}

export function useIntaniaRed() {
  return useColorModeValue('intaniaRed.500', 'intaniaRedSecondary.500')
}

export function useRedText() {
  return useColorModeValue('intaniaRed.500', 'intaniaRedSecondary.400')
}
