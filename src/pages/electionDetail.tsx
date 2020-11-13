import { useElectionContext } from 'providers/electionProvider'
import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import NotFound from './404'

export default function ElectionDetail() {
  const { electionMap } = useElectionContext()
  const match = useRouteMatch<{ electionName: string }>(
    '/election/:electionName',
  )
  const election = electionMap[match?.params.electionName || '']
  if (!election) {
    return <NotFound />
  }
  return <pre>{JSON.stringify(election, null, 2)}</pre>
}
