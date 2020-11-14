import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import { Position } from 'types/election'
import Card from './Card'
import { CandidateCard, Checkbox } from './CandidateCard'

interface CandidateListProps {
  position: Position
  selected: number
  setSelected: (candidateNo: number) => void
  disabled: boolean
}

export default function CandidateList({
  position,
  selected,
  setSelected,
  disabled,
}: CandidateListProps) {
  return (
    <Box pt="16px">
      <Card fontWeight="300">
        กาลงในช่อง{' '}
        <Box
          display="inline-block"
          borderWidth="1.5px"
          borderColor="intaniaRed.600"
          boxSize="20px"
          rounded="sm"
          transform="translateY(4px)"
        />{' '}
        <Box display={['block', 'none']} />
        ของหมายเลขที่คุณต้องการเลือก
      </Card>
      <Flex flexDirection={['column', 'row']} flexWrap="wrap" mx={[0, '-12px']}>
        {position.candidates.map((candidate) => (
          <CandidateCard
            key={candidate.id}
            candidate={candidate}
            selected={selected}
            setSelected={setSelected}
            disabled={disabled}
            w={['100%', '348px', '304px']}
            mx={[0, '12px']}
            mt="12px"
          />
        ))}
      </Flex>
      <Card my="12px">
        <Flex justify="center">
          <Text fontSize="md" fontWeight="medium" mr="5px">
            งดออกเสียง
          </Text>
          <Checkbox
            index={-1}
            selected={selected}
            setSelected={setSelected}
            disabled={disabled}
          />
        </Flex>
      </Card>
    </Box>
  )
}
