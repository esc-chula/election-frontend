import React, { useCallback } from 'react'
import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Box,
  useColorModeValue,
} from '@chakra-ui/react'
import Container from './Container'
import { useAuthContext } from 'providers/authProvider'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Link, useHistory } from 'react-router-dom'
import { DarkModeController } from './DarkModeController'
import { branding } from 'config/branding'

const TopBar = () => {
  const { isAuthenticated, authUser, logout } = useAuthContext()
  const bg = useColorModeValue('white', 'gray.900')
  const color = useColorModeValue('intaniaRed.500', 'intaniaRedSecondary.400')
  const activeColor = useColorModeValue('intaniaRed.700', 'intaniaRed.500')
  const { push } = useHistory()

  const goToProfile = useCallback(() => {
    push('/profile')
  }, [push])

  const { logoURL, logoDarkURL } = branding

  return (
    <Flex
      bg={bg}
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
          <Link to="/profile">
            <img
              style={{ height: 75 }}
              src={useColorModeValue(logoURL, logoDarkURL)}
            />
          </Link>
          <Box flex={1} />
          <DarkModeController />
          {isAuthenticated && (
            <Menu>
              <MenuButton
                as={Button}
                fontWeight="medium"
                variant="link"
                ml="16px"
                color={color}
                _active={{
                  color: activeColor,
                }}
                rightIcon={<ChevronDownIcon boxSize="24px" />}
              >
                {authUser.username}
              </MenuButton>
              <MenuList>
                <MenuItem onClick={goToProfile}>ข้อมูลผู้ใช้สิทธิ์</MenuItem>
                <MenuItem onClick={logout}>ออกจากระบบ</MenuItem>
              </MenuList>
            </Menu>
          )}
        </Flex>
      </Container>
    </Flex>
  )
}

export default TopBar
