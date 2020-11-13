import React from 'react'
import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Icon,
  Box,
} from '@chakra-ui/core'

import { ReactComponent as ESCLogo } from '../images/esc-logo.svg'
import Container from './Container'
import { useAuthContext } from 'providers/authProvider'
const TopBar = () => {
  const { isAuthenticated, authUser, logout } = useAuthContext()
  return (
    <Flex
      bg="white"
      zIndex={100}
      w="100%"
      h="75px"
      alignItems="center"
      boxShadow="0px 1px 1px rgba(0, 0, 0, 0.15)"
      top="0"
      position="fixed"
      justifyContent="space-between"
    >
      <Container w="100%">
        <Flex w="100%" alignItems="center">
          <ESCLogo />
          <Box flex={1} />
          {isAuthenticated && (
            <Menu>
              <MenuButton
                as={Button}
                fontWeight="medium"
                {...{ variant: 'link', variantColor: 'intaniaRed' }}
              >
                {authUser.username}
                <Icon name="chevron-down" size="24px"></Icon>
              </MenuButton>
              <MenuList>
                <MenuItem
                  backgroundColor="white"
                  _hover={{ bg: 'white' }}
                  onClick={logout}
                >
                  ออกจากระบบ
                </MenuItem>
              </MenuList>
            </Menu>
          )}
        </Flex>
      </Container>
    </Flex>
  )
}

export default TopBar
