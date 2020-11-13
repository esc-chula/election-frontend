import React, { ReactNode } from 'react'
import { ThemeProvider } from '@chakra-ui/core'
import theme from 'config/theme'
import AuthProvider from './authProvider'
import HttpProvider from './httpProvider'
import PageLoadingProvider from 'components/PageLoadingProvider'

interface Props {
  children: ReactNode
}

const Providers = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <PageLoadingProvider>
        <AuthProvider>
          <HttpProvider>{children}</HttpProvider>
        </AuthProvider>
      </PageLoadingProvider>
    </ThemeProvider>
  )
}

export default Providers
