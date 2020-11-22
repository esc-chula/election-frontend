import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import ElectionProvider, {
  useElectionContext,
} from 'providers/electionProvider'
import RedirectFirstElection from 'components/RedirectFirstElection'
import ElectionDetail from './electionDetail'
import NotFound from './404'
import { withAuth } from 'providers/authProvider'

function ElectionFinder() {
  const { electionMap } = useElectionContext()
  const match = useRouteMatch<{ electionName: string }>(
    '/election/:electionName',
  )
  const election = electionMap[match?.params.electionName || '']
  if (!election) {
    return <NotFound />
  } else {
    return <ElectionDetail election={election} />
  }
}

function ElectionRouter() {
  return (
    <ElectionProvider>
      <Switch>
        <Route path="/election" exact component={RedirectFirstElection} />
        <Route path="/election/:electionName" component={ElectionFinder} />
      </Switch>
    </ElectionProvider>
  )
}

export default withAuth(ElectionRouter)
