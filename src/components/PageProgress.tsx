import React from 'react'
import {
  Stack,
  StackProps,
  Text,
  TextProps,
  useColorMode,
} from '@chakra-ui/react'
import { branding } from 'config/branding'

export type CurrentPage = 'profile' | 'rules'

interface PageProgressProps extends StackProps {
  page: CurrentPage
}

const PageProgress = ({ page, ...rest }: PageProgressProps) => {
  const { colorMode } = useColorMode()
  const activeStyle: TextProps = {
    fontSize: ['2xl', '2xl', '3xl'],
    fontWeight: 'medium',
    color: colorMode === 'dark' ? 'whiteAlpha.900' : 'black',
  }
  const inactiveStyle: TextProps = {
    fontSize: ['md', 'md', 'lg'],
    fontWeight: 'light',
    color: colorMode === 'dark' ? 'gray.500' : 'mono.2',
  }
  const hasRules = branding.rules.length !== 0
  return (
    <Stack spacing="8px" {...rest} width={['100%', '250px', '260px']}>
      <Text {...(page === 'profile' ? activeStyle : inactiveStyle)}>
        {hasRules && '1. '}ข้อมูลผู้ใช้สิทธิ
      </Text>
      {hasRules && (
        <Text {...(page === 'rules' ? activeStyle : inactiveStyle)}>
          2. ระเบียบการเลือกตั้ง
        </Text>
      )}
    </Stack>
  )
}

export default PageProgress
