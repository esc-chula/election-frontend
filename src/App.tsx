import React from 'react'
import Providers from 'providers'
import './components/TopBar'
import TopBar from './components/TopBar'
import PageWrapper from './components/PageWrapper'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Login from 'pages/login'
import ProfilePage from 'pages/profile'
import RulesPage from 'pages/rules'
import { BASENAME } from 'config/env'
import CallbackPage from 'pages/callback'
import ElectionRouter from 'pages/electionRouter'
import PageLoadingComponent from 'components/PageLoadingComponent'
import NotFound from 'pages/404'
import { ScrollToTop } from 'components/ScrollToTop'

function App() {
  return (
    <Router basename={BASENAME}>
      <Providers>
        <ScrollToTop />
        <PageWrapper>
          <TopBar />
          <PageLoadingComponent />
          <Switch>
            <Route path="/" exact>
              <Redirect to="/profile" />
            </Route>
            <Route path="/login" component={Login} />
            <Route path="/callback" component={CallbackPage} />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/rules" component={RulesPage} />
            <Route path="/election" component={ElectionRouter} />
            <Route component={NotFound} />
          </Switch>
        </PageWrapper>
      </Providers>
    </Router>
  )
}

export default App
