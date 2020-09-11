import React from 'react'
import { Flex, Image } from '@chakra-ui/core'

import escLogo from '../images/esc-logo.svg'

const TopBar = () => {
  return (
    <Flex
      // position="fixed"
      bg="white"
      w="100%"
      h="75px"
      alignItems="center"
      boxShadow="0px 1px 1px rgba(0, 0, 0, 0.15)"
      top="0"
      position="fixed"
    >
      <Image src={escLogo} ml={[0, '16.67%']}></Image>
    </Flex>
  )
}

export default TopBar
