import { Flex, Spinner } from '@chakra-ui/core'
import { keyframes } from '@emotion/core'
import styled from '@emotion/styled'
import React from 'react'

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

export default function PageLoading() {
  return (
    <Container flex="1" justifyContent="center" alignItems="center">
      <Spinner thickness="4px" color="intaniaRed.500" size="xl" />
    </Container>
  )
}
