import { Flex, Spinner } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'
import { useIntaniaRed } from 'util/hooks'
import { usePageLoadingContext } from './PageLoadingProvider'

const fadeIn = keyframes`
  0% { 
    opacity: 0;
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const Container = styled(Flex)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  animation: ${fadeIn} 1s ease;
`

export default function PageLoadingComponent() {
  const [count] = usePageLoadingContext()
  const intaniaRed = useIntaniaRed()
  if (count === 0) {
    return null
  }
  return (
    <Container justifyContent="center" alignItems="center">
      <Spinner thickness="4px" color={intaniaRed} size="xl" />
    </Container>
  )
}
