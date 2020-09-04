import React from 'react'
import { CSSReset } from '@chakra-ui/core'
import Providers from 'providers'
import './App.css'
import './components/TopBar'
import TopBar from './components/TopBar'
import Footer from './components/Footer'
import PageWrapper from './components/PageWrapper'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import IndexPage from 'pages'

function App() {
  return (
    <Router>
      <Providers>
        <CSSReset />
        <TopBar />
        <PageWrapper>
          <Switch>
            <Route path="/" component={IndexPage} />
          </Switch>
          <Footer />
        </PageWrapper>
      </Providers>
    </Router>
  )
}

export default App
