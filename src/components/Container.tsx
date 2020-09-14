import { Box, BoxProps } from '@chakra-ui/core'
import React from 'react'

const Container = ({ children, ...rest }: BoxProps) => {
  return (
    <Box margin="0 auto" {...rest}>
      {children}
    </Box>
  )
}

export default Container
