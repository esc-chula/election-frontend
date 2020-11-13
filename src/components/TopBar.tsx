import React from 'react'
import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Box,
} from '@chakra-ui/react'

import { ReactComponent as ESCLogo } from '../images/esc-logo.svg'
import Container from './Container'
import { useAuthContext } from 'providers/authProvider'
import { ChevronDownIcon } from '@chakra-ui/icons'
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
                variant="link"
                colorScheme="intaniaRed"
                rightIcon={<ChevronDownIcon boxSize="24px" />}
              >
                {authUser.username}
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
