import { Box, BoxProps } from '@chakra-ui/core'
import React, { ReactNode } from 'react'

interface Props extends BoxProps {
  children: ReactNode
}

const Card = ({ children, ...rest }: Props) => {
  return (
    <Box
      bg="white"
      borderRadius="4px"
      boxShadow="0px 1px 5px rgba(0, 0, 0, 0.15)"
      {...rest}
    >
      {children}
    </Box>
  )
}

export default Card
