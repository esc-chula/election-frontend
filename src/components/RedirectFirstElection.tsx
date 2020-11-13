import React from 'react'
import { useElectionContext } from 'providers/electionProvider'
import { Redirect } from 'react-router-dom'

export default function RedirectFirstElection() {
  const { elections } = useElectionContext()
  if (elections.length === 0) {
    return <>No election </>
  }
  return <Redirect to={`/election/${elections[0].name}`} />
}
