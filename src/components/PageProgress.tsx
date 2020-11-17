import React from 'react'
import {
  Stack,
  StackProps,
  Text,
  TextProps,
  useColorMode,
} from '@chakra-ui/react'
import { useAuthContext } from 'providers/authProvider'

export type CurrentPage = 'profile' | 'policy' | 'rule'

interface PageProgressProps extends StackProps {
  page: CurrentPage
}

const PageProgress = ({ page, ...rest }: PageProgressProps) => {
  const { authUser } = useAuthContext()
  const accepted =
    page === 'profile' && authUser.policyAccepted && authUser.ruleAccepted
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

  return (
    <Stack spacing="8px" {...rest} width={['100%', '300px', '500px']}>
      <Text {...(page === 'profile' ? activeStyle : inactiveStyle)}>
        {!accepted && '1. '}ข้อมูลผู้ใช้สิทธิ
      </Text>
      {!accepted && (
        <>
          <Text {...(page === 'policy' ? activeStyle : inactiveStyle)}>
            2. นโยบายการจัดเก็บข้อมูล
          </Text>
          <Text {...(page === 'rule' ? activeStyle : inactiveStyle)}>
            3. กฎและกติกาการเลือกตั้ง
          </Text>
        </>
      )}
    </Stack>
  )
}

export default PageProgress
