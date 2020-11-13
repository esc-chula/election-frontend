import React from 'react'
import {
  Button,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Icon,
} from '@chakra-ui/core'

import escLogo from '../images/esc-logo.svg'

const TopBar = () => {
  return (
    <Flex
      bg="white"
      w="100%"
      h="75px"
      alignItems="center"
      boxShadow="0px 1px 1px rgba(0, 0, 0, 0.15)"
      top="0"
      position="fixed"
      justifyContent="space-between"
    >
      <Image src={escLogo} ml={[0, '16.67%']}></Image>
      <Menu>
        <MenuButton
          as={Button}
          color="intaniaRed.600"
          backgroundColor="white"
          mr={[0, '16.67%']}
          _hover={{ bg: 'intaniaRed.50' }}
        >
          623xxxxx21
          <Icon name="chevron-down" size="24px"></Icon>
        </MenuButton>
        <MenuList>
          <MenuItem backgroundColor="white" _hover={{ bg: 'white' }}>
            ออกจากระบบ
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  )
}

export default TopBar
