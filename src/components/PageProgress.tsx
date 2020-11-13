import React from 'react'
import { Stack, StackProps, Text } from '@chakra-ui/react'
import { useAuthContext } from 'providers/authProvider'

export type CurrentPage = 'profile' | 'policy' | 'rule'

interface PageProgressProps extends StackProps {
  page: CurrentPage
}

const textStyles = {
  active: {
    fontSize: ['2xl', '2xl', '3xl'],
    fontWeight: 'medium',
    color: 'black',
  },
  inactive: {
    fontSize: ['md', 'md', 'lg'],
    fontWeight: 'light',
    color: 'mono.1',
  },
}

const PageProgress = ({ page, ...rest }: PageProgressProps) => {
  const { authUser } = useAuthContext()
  const accepted = authUser.policyAccepted && authUser.ruleAccepted

  return (
    <Stack spacing="8px" {...rest} width={['100%', '300px', '500px']}>
      <Text {...textStyles[page === 'profile' ? 'active' : 'inactive']}>
        {!accepted && '1. '}ข้อมูลผู้ใช้สิทธิ
      </Text>
      {!accepted && (
        <>
          <Text {...textStyles[page === 'policy' ? 'active' : 'inactive']}>
            2. นโยบายการเก็บข้อมูล
          </Text>
          <Text {...textStyles[page === 'rule' ? 'active' : 'inactive']}>
            3. กฎและกติกาการเลือกตั้ง
          </Text>
        </>
      )}
    </Stack>
  )
}

export default PageProgress
