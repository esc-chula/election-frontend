import React from 'react'
import { Text, TextProps, useColorModeValue } from '@chakra-ui/react'

export function Header(props: TextProps) {
  return (
    <Text
      fontSize={['xl', '2xl']}
      fontWeight="regular"
      color={useColorModeValue('mono.6', 'whiteAlpha.900')}
      {...props}
    />
  )
}
