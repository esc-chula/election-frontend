import { useEffect } from 'react'
import { usePageLoadingContext } from './PageLoadingProvider'

export default function PageLoading() {
  const [, setCount] = usePageLoadingContext()
  useEffect(() => {
    setCount((count) => count + 1)
    return () => setCount((count) => count - 1)
  }, [setCount])
  return null
}
