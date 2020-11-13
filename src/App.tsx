import React from 'react'
import { CSSReset } from '@chakra-ui/core'
import Providers from 'providers'
import './App.css'
import './components/TopBar'
import TopBar from './components/TopBar'
import Footer from './components/Footer'
import PageWrapper from './components/PageWrapper'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Login from 'pages/login'
import ProfilePage from 'pages/profile'
import PolicyPage from 'pages/policy'
import { BASENAME } from 'config/env'
import CallbackPage from 'pages/callback'

function App() {
  return (
    <Router basename={BASENAME}>
      <Providers>
        <CSSReset />
        <PageWrapper>
          <TopBar />
          <Switch>
            <Route path="/" exact>
              <Redirect to="/profile" />
            </Route>
            <Route path="/login" component={Login} />
            <Route path="/callback" component={CallbackPage} />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/policy" component={PolicyPage} />
          </Switch>
          <Footer />
        </PageWrapper>
      </Providers>
    </Router>
  )
}

export default App
