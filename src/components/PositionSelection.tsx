import React from 'react'
import { useColorModeValue } from '@chakra-ui/color-mode'
import { Box, Text } from '@chakra-ui/layout'
import { Candidate, Position } from 'types/election'
import styled from '@emotion/styled'
import { useIntaniaRed } from 'util/hooks'

export interface PositionSelection {
  position: Position
  positionIndex: number
  selectedValue: number
  selectedCandidate: Candidate
}

interface IProps {
  selection: PositionSelection
  multiplePosition: boolean
}

// const alternateStates = {
//   [-1]: 'งดออกเสียง',
//   [-2]: 'รับรอง',
//   [-3]: 'ไม่รับรอง',
// }

const alternateStates = {
  [-1]: 'งดออกเสียง',
  [-2]: 'เห็นด้วย',
  [-3]: 'ไม่เห็นด้วย',
}

export function PositionSelection({ selection, multiplePosition }: IProps) {
  const { position, selectedValue, selectedCandidate } = selection

  const intaniaRed = useColorModeValue(
    'intaniaRed.500',
    'intaniaRedSecondary.400',
  )

  if (multiplePosition) {
    return <SmallSelectionBox selection={selection} />
  }
  if (selection.selectedCandidate) {
    return <SelectedCandidateBox selectedCandidate={selectedCandidate} />
  }
  if ([-2, -3].includes(selectedValue)) {
    return (
      <>
        <Text mt="16px" color={intaniaRed} textAlign="center" fontSize="2xl">
          {alternateStates[selectedValue]}
        </Text>
        <SelectedCandidateBox selectedCandidate={position.candidates[0]} />
      </>
    )
  }
  return (
    <Text mt="16px" color={intaniaRed} textAlign="center" fontSize="2xl">
      {alternateStates[selectedValue]}
    </Text>
  )
}

interface SelectedCandidateBoxProps {
  selectedCandidate: Candidate
}

function SelectedCandidateBox({
  selectedCandidate,
}: SelectedCandidateBoxProps) {
  const intaniaRed = useColorModeValue(
    'intaniaRed.500',
    'intaniaRedSecondary.400',
  )
  const selectedCandidateColor = useColorModeValue('mono.4', 'whiteAlpha.800')
  const isParty = selectedCandidate.members.length !== 1
  const member = !isParty && selectedCandidate.members[0]
  const name = member?.name ?? selectedCandidate.name
  return (
    <Box mt="16px" ml="32px">
      {/* <Text mt="16px" color={intaniaRed} fontSize="20px">
        เบอร์ {selectedCandidate.candidateID}
      </Text> */}
      <Text color={selectedCandidateColor} fontWeight={300} fontSize="16px">
        {name}
        <br />
        {member && `${member.department} ปี ${member.year}`}
      </Text>
    </Box>
  )
}

const Layout = styled.div`
  display: flex;
  margin-top: 16px;
  margin-bottom: 4px;
`

function SmallSelectionBox({ selection }: { selection: PositionSelection }) {
  const { position, selectedValue, selectedCandidate } = selection
  const intaniaRed = useIntaniaRed()
  const showCandidate = selectedCandidate ?? position.candidates[0]
  const isParty = showCandidate.members.length !== 1
  const mutedText = useColorModeValue('mono.4', 'whiteAlpha.700')
  const candidateName = isParty
    ? showCandidate.name
    : showCandidate.members[0].name

  return (
    <Layout>
      <Text width="18px" fontWeight={400} fontSize={16}>
        {`${selection.positionIndex + 1}.`}
      </Text>
      <div>
        <Text fontWeight={400} fontSize={16}>
          {selection.position.name}
        </Text>
        <div style={{ display: 'flex' }}>
          <Text color={intaniaRed} fontWeight={400} fontSize={14}>
            {[-1, -2, -3].includes(selectedValue)
              ? alternateStates[selectedValue]
              : `เบอร์ ${selectedCandidate.candidateID}`}
          </Text>
          {selectedValue !== -1 && candidateName && (
            <Text color={mutedText} ml={1} fontWeight={300} fontSize={14}>
              - {candidateName}
            </Text>
          )}
        </div>
      </div>
    </Layout>
  )
}
