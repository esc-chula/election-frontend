import { Flex, Spinner } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'
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
  animation: ${fadeIn} 1s ease;
`

export default function PageLoadingComponent() {
  const [count] = usePageLoadingContext()
  if (count === 0) {
    return null
  }
  return (
    <Container flex="1" justifyContent="center" alignItems="center">
      <Spinner thickness="4px" color="intaniaRed.500" size="xl" />
    </Container>
  )
}
