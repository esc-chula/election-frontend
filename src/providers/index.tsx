import React, { ReactNode } from 'react'
import { ChakraProvider, localStorageManager } from '@chakra-ui/react'
import theme from 'config/theme'
import AuthProvider from './authProvider'
import HttpProvider from './httpProvider'
import PageLoadingProvider from 'components/PageLoadingProvider'

interface Props {
  children: ReactNode
}

const Providers = ({ children }: Props) => {
  return (
    <ChakraProvider theme={theme} colorModeManager={localStorageManager}>
      <PageLoadingProvider>
        <AuthProvider>
          <HttpProvider>{children}</HttpProvider>
        </AuthProvider>
      </PageLoadingProvider>
    </ChakraProvider>
  )
}

export default Providers
