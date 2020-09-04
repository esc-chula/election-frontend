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
import ProfilePage from 'pages/profile'
import PolicyPage from 'pages/policy'
import { css, Global } from '@emotion/core'
import { BASENAME } from 'config/env'

function App() {
  return (
    <Router basename={BASENAME}>
      <Global
        styles={css`
          body {
            font-family: 'Kanit';
          }
        `}
      />
      <Providers>
        <CSSReset />
        <TopBar />
        <PageWrapper>
          <Switch>
            <Route path="/profile" component={ProfilePage} />
            <Route path="/policy" component={PolicyPage} />
            <Route path="/" component={IndexPage} />
          </Switch>
          <Footer />
        </PageWrapper>
      </Providers>
    </Router>
  )
}

export default App
