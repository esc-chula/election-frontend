import React, { Dispatch, SetStateAction, useCallback, useState } from 'react'
import Container from 'components/Container'
import { useElectionContext } from 'providers/electionProvider'
import { useRouteMatch } from 'react-router-dom'
import NotFound from './404'
import { Text } from '@chakra-ui/core'
import CandidateList from 'components/CandidateList'
import { Position } from 'types/election'

type SelectedMap = Record<number, number>

export default function ElectionDetail() {
  const { electionMap } = useElectionContext()
  const match = useRouteMatch<{ electionName: string }>(
    '/election/:electionName',
  )
  const election = electionMap[match?.params.electionName || '']
  const [selected, setSelected] = useState<SelectedMap>({})

  if (!election) {
    return <NotFound />
  }

  return (
    <Container>
      <Text pt="16px" fontWeight="medium" fontSize={['xl', '2xl']}>
        {election.name}
      </Text>
      {election.positions.map((position) => (
        <PositionAdapter
          key={position.id}
          position={position}
          selected={selected}
          setSelected={setSelected}
        />
      ))}
    </Container>
  )
}

interface PositionAdapterProps {
  position: Position
  selected: SelectedMap
  setSelected: Dispatch<SetStateAction<SelectedMap>>
}

function PositionAdapter({
  position,
  selected: selectedMap,
  setSelected: setSelectedMap,
}: PositionAdapterProps) {
  const positionId = position.id
  const selected = selectedMap[positionId]
  const setSelected = useCallback(
    (newSelected: number) => {
      setSelectedMap((oldMap: SelectedMap) => ({
        ...oldMap,
        [positionId]: newSelected,
      }))
    },
    [positionId, setSelectedMap],
  )
  return (
    <CandidateList
      position={position}
      selected={selected}
      setSelected={setSelected}
    />
  )
}
