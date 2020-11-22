import React, { useCallback, useContext, useMemo } from 'react'
import PageLoading from 'components/PageLoading'
import { createContext, PropsWithChildren } from 'react'
import useSWR from 'swr'
import { Election } from 'types/election'

interface ElectionMap {
  [key: string]: Election
}

export interface ElectionConstruct {
  elections: Election[]
  electionMap: ElectionMap
  setVoted: (electionId: number) => void
}

const ElectionContext = createContext({} as ElectionConstruct)

export function useElectionContext() {
  return useContext(ElectionContext)
}

export default function ElectionProvider({
  children,
}: PropsWithChildren<unknown>) {
  const { data: rawElections, mutate } = useSWR<Election[]>('/elections')
  const elections = rawElections?.map((election) => ({
    ...election,
    name: `การเลือกตั้ง${election.name}`,
  }))
  const electionMap = useMemo(() => {
    const electionMap = {} as ElectionMap
    elections?.forEach((election) => {
      electionMap[election.name] = election
    })
    return electionMap
  }, [elections])

  const setVoted = useCallback(
    (electionId: number) => {
      mutate(
        (elections) =>
          elections.map((election) => {
            if (election.id === electionId) {
              return { ...election, voted: true }
            } else {
              return election
            }
          }),
        false,
      )
    },
    [mutate],
  )

  if (elections === undefined) {
    return <PageLoading />
  }

  return (
    <ElectionContext.Provider value={{ elections, electionMap, setVoted }}>
      {children}
    </ElectionContext.Provider>
  )
}
