import { Box, BoxProps } from '@chakra-ui/react'
import React from 'react'

const Card = ({ children, ...rest }: BoxProps) => {
  return (
    <Box
      bg="white"
      borderRadius="4px"
      boxShadow="0px 1px 5px rgba(0, 0, 0, 0.15)"
      padding="12px"
      textAlign="center"
      {...rest}
    >
      {children}
    </Box>
  )
}

export default Card
