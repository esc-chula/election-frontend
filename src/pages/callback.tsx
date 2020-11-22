import { Spinner } from '@chakra-ui/react'
import { useAuthContext } from 'providers/authProvider'
import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useQueryString } from 'util/hooks'

const CallbackPage = () => {
  const { exchangeToken } = useAuthContext()
  const history = useHistory()
  const query = useQueryString()
  const token = query.token as string

  useEffect(() => {
    if (typeof token === 'undefined') {
      history.push('/')
    }
    exchangeToken(token)
      .then(() => {
        history.push('/profile')
      })
      .catch(() => {
        history.push('/')
      })
  }, [token, history, exchangeToken])

  return (
    <Spinner
      color="intaniaRed.600"
      size="xl"
      margin="100px auto"
      emptyColor="mono.1"
    />
  )
}

export default CallbackPage
