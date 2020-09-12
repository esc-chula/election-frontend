import React from 'react'
import { Stack, StackProps, Text } from '@chakra-ui/core'

export type CurrentPage = 'profile' | 'policy' | 'dashboard'

interface PageProgressProps extends StackProps {
  page: CurrentPage
}

const textStyles = {
  active: {
    fontSize: ['2xl', '3xl'],
    fontWeight: 'medium',
    color: 'black',
  },
  inactive: {
    fontSize: ['md', 'xl'],
    fontWeight: 'light',
    color: 'mono.1',
  },
}

const PageProgress = ({ page, ...rest }: PageProgressProps) => {
  return (
    <Stack spacing="8px" {...rest}>
      <Text {...textStyles[page === 'profile' ? 'active' : 'inactive']}>
        1. ข้อมูลผู้ใช้สิทธิ
      </Text>
      <Text {...textStyles[page === 'policy' ? 'active' : 'inactive']}>
        2. กฎการเลือกตั้ง
      </Text>
      <Text {...textStyles[page === 'dashboard' ? 'active' : 'inactive']}>
        3. การเลือกตั้งในตอนนี้
      </Text>
    </Stack>
  )
}

export default PageProgress
