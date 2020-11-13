import React from 'react'
import { withAccepted } from 'providers/authProvider'
import { Route, Switch } from 'react-router-dom'
import ElectionProvider from 'providers/electionProvider'
import RedirectFirstElection from 'components/RedirectFirstElection'
import ElectionDetail from './electionDetail'

function ElectionRouter() {
  return (
    <ElectionProvider>
      <Switch>
        <Route path="/election" exact component={RedirectFirstElection} />
        <Route path="/election/:electionName" component={ElectionDetail} />
      </Switch>
    </ElectionProvider>
  )
}

export default withAccepted(ElectionRouter)
