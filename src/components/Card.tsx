import { Box, BoxProps, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

const Card = ({ children, ...rest }: BoxProps) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.700')}
      borderRadius="4px"
      boxShadow="0px 1px 5px rgba(0, 0, 0, 0.15)"
      padding="12px"
      {...rest}
    >
      {children}
    </Box>
  )
}

export default Card
