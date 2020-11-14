import React from 'react'
import { Flex } from '@chakra-ui/react'

interface Props {
  children: React.ReactNode
}

const PageWrapper = ({ children }: Props) => {
  return (
    <Flex flex={1} flexDirection="column" pt="75px">
      {children}
    </Flex>
  )
}

export default PageWrapper
