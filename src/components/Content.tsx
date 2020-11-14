import React from 'react'
import { Text, TextProps, useColorModeValue } from '@chakra-ui/react'

export function Content(props: TextProps) {
  return (
    <Text
      fontSize={['sm', 'md']}
      fontWeight="light"
      color={useColorModeValue('mono.4', 'whiteAlpha.800')}
      {...props}
    />
  )
}
