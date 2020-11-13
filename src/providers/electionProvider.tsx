import PageLoading from 'components/PageLoading'
import React, { useContext, useMemo } from 'react'
import { createContext, PropsWithChildren } from 'react'
import useSWR from 'swr'
import { Election } from 'types/election'

interface ElectionMap {
  [key: string]: Election
}

export interface ElectionConstruct {
  elections: Election[]
  electionMap: ElectionMap
}

const ElectionContext = createContext({} as ElectionConstruct)

export function useElectionContext() {
  return useContext(ElectionContext)
}

export default function ElectionProvider({
  children,
}: PropsWithChildren<unknown>) {
  const { data: elections } = useSWR<Election[]>('/elections')
  const electionMap = useMemo(() => {
    const electionMap = {} as ElectionMap
    elections?.forEach((election) => {
      electionMap[election.name] = election
    })
    return electionMap
  }, [elections])

  if (elections === undefined) {
    return <PageLoading />
  }

  return (
    <ElectionContext.Provider value={{ elections, electionMap }}>
      {children}
    </ElectionContext.Provider>
  )
}
