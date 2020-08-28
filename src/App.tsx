import React from 'react'
import { CSSReset } from '@chakra-ui/core'
import Providers from 'providers'
import './App.css'

function App() {
  return (
    <Providers>
      <CSSReset />
      {/*insert children here*/}
    </Providers>
  )
}

export default App
