import React from 'react'
import { Flex } from '@chakra-ui/react'

interface Props {
  children: React.ReactNode
}

const PageWrapper = ({ children }: Props) => {
  return (
    <Flex
      flex={1}
      flexDirection="column"
      pt="75px"
      mb="env(safe-area-inset-bottom)"
    >
      {children}
    </Flex>
  )
}

export default PageWrapper
