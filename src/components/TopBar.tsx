import React from 'react'
import { Flex, Image } from '@chakra-ui/core'

const TopBar = () => {
  return (
    <Flex
      bg="white"
      w="100%"
      h="75px"
      alignItems="center"
      boxShadow="0px 1px 1px rgba(0, 0, 0, 0.15)"
    >
      <Image src="/images/esc-logo.svg" ml={[0, 0, '16.67%']}></Image>
    </Flex>
  )
}

export default TopBar
