import React from 'react'
import './App.css'
import { CSSReset } from '@chakra-ui/core'
import Providers from 'providers'

function App() {
  return (
    <Providers>
      <CSSReset />
      {/*insert children here*/}
    </Providers>
  )
}

export default App
