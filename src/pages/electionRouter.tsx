import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import ElectionProvider, {
  useElectionContext,
} from 'providers/electionProvider'
import RedirectFirstElection from 'components/RedirectFirstElection'
import ElectionDetail from './electionDetail'
import NotFound from './404'
import { withAuth } from 'providers/authProvider'
import PermissionDenied from '../components/PermissionDenied'
import PermissionAccept from '../components/PermissionAccept'

function ElectionFinder() {
  const { electionMap } = useElectionContext()
  const match = useRouteMatch<{ electionName: string }>(
    '/election/:electionName',
  )
  const election = electionMap[match?.params.electionName || '']
  if (!election) {
    return <NotFound />
  } else if (election.positions.length === 0) {
    return <PermissionDenied />
  } else if (
    election.positions.length === 1 &&
    election.positions[0].name ===
      'เช็กสิทธิ์การเลือกตั้งกรรมการนิสิตคณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย ประจำปีการศึกษา 2567'
  ) {
    return <PermissionAccept />
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
