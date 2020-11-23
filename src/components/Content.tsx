import React from 'react'
import { Text, TextProps, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const StyledText = styled(Text)`
  &::-webkit-scrollbar {
    width: 11px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.thumbColor};
    border-radius: 30px;
    border: 4px solid ${(props) => props.trackColor};
  }
`

export function Content(props: TextProps) {
  const thumbColor = useColorModeValue('#4F4F4F', '#FFFFFFCC')
  const trackColor = useColorModeValue('#FFFFFF', '#2D3748')
  return (
    <StyledText
      fontSize={['sm', 'md']}
      fontWeight="light"
      color={useColorModeValue('mono.4', 'whiteAlpha.800')}
      borderColor={trackColor}
      thumbColor={thumbColor}
      trackColor={trackColor}
      {...props}
    />
  )
}
