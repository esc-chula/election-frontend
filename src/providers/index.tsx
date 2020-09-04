import React, { ReactNode } from 'react'
import { ThemeProvider } from '@chakra-ui/core'
import theme from 'config/theme'
import AuthProvider from './authProvider'

interface Props {
  children: ReactNode
}

const Providers = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
  )
}

export default Providers
