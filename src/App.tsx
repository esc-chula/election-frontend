import React from 'react'
import { CSSReset } from '@chakra-ui/core'
import Providers from 'providers'
import './App.css'
import './components/TopBar'
import TopBar from './components/TopBar'

function App() {
  return (
    <Providers>
      <CSSReset />
      <TopBar />
    </Providers>
  )
}

export default App
