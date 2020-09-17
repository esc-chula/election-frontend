import React from 'react'
import { Flex } from '@chakra-ui/core'

interface Props {
  children: React.ReactNode
}

const PageWrapper = ({ children }: Props) => {
  return (
    <Flex
      justifyContent="space-between"
      minH="100vh"
      flexDirection="column"
      pt="75px"
    >
      {children}
    </Flex>
  )
}

export default PageWrapper
