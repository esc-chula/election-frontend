import { Box, BoxProps } from '@chakra-ui/core'
import React, { ReactNode } from 'react'

interface Props extends BoxProps {
  children: ReactNode
}

const Container = ({ children, ...rest }: Props) => {
  return (
    <Box margin="0 auto" {...rest}>
      {children}
    </Box>
  )
}

export default Container
