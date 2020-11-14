import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

export function ScrollToTop() {
  const history = useHistory()
  useEffect(() => {
    return history.listen((_, action) => {
      if (action !== 'POP') {
        window.scrollTo(0, 0)
      }
    })
  }, [history])
  return null
}
