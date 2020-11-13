import React from 'react'
import { Flex } from '@chakra-ui/react'
import Footer from './Footer'

interface Props {
  children: React.ReactNode
}

const PageWrapper = ({ children }: Props) => {
  return (
    <Flex minH="100vh" flexDirection="column">
      <Flex flex={1} flexDirection="column" pt="75px">
        {children}
      </Flex>
      <Footer />
    </Flex>
  )
}

export default PageWrapper
