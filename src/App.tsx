import React from 'react'
import { CSSReset, Flex, Box } from '@chakra-ui/core'
import Providers from 'providers'
import './App.css'
import './components/TopBar'
import TopBar from './components/TopBar'
import Footer from './components/Footer'
import PageWrapper from './components/PageWrapper'

function App() {
  return (
    <Providers>
      <CSSReset />
      <TopBar />
      <PageWrapper>
        <Box />
        <Footer />
      </PageWrapper>
    </Providers>
  )
}

export default App
