import React, { ReactNode } from 'react'
import { ThemeProvider } from '@chakra-ui/core'
import theme from 'config/theme'

interface Props {
  children: ReactNode
}

const Providers = ({ children }: Props) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default Providers
