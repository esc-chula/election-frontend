import React from 'react'
import { Box, Flex, Stack, Text } from '@chakra-ui/react'
import { Position } from 'types/election'
import Card from './Card'
import { CandidateCard } from './CandidateCard'
import { CandidateCheckbox } from './CandidateCheckbox'

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
  const isSingular = position.candidates.length === 1
  const isParty = position.candidates[0].members.length !== 1

  return (
    <Box>
      <Flex flexDirection={['column', 'row']} flexWrap="wrap" mx={[0, '-6px']}>
        {position.candidates.map((candidate) => (
          <CandidateCard
            key={candidate.id}
            candidate={candidate}
            selected={selected}
            setSelected={setSelected}
            disabled={disabled}
            w={isSingular || isParty ? '100%' : ['100%', '354px', '474px']}
            mx={[0, '6px']}
            mt="12px"
            isSingular={isSingular}
          />
        ))}
      </Flex>
      {isSingular && (
        <Stack my="12px" spacing="20px" direction="row">
          <Card flexGrow={1}>
            <Flex justify="center" alignItems="center">
              {/* <Text fontSize={['sm', 'md', 'lg']} fontWeight="medium" mr="16px">
                รับรอง
              </Text> */}
              <Text fontSize={['sm', 'md', 'lg']} fontWeight="medium" mr="16px">
                รับรอง
              </Text>
              <CandidateCheckbox
                index={-2}
                selected={selected}
                setSelected={setSelected}
                disabled={disabled}
              />
            </Flex>
          </Card>
          <Card flexGrow={1}>
            <Flex justify="center" alignItems="center">
              {/* <Text fontSize={['sm', 'md', 'lg']} fontWeight="medium" mr="16px">
                ไม่รับรอง
              </Text> */}
              <Text fontSize={['sm', 'md', 'lg']} fontWeight="medium" mr="16px">
                ไม่รับรอง
              </Text>
              <CandidateCheckbox
                index={-3}
                selected={selected}
                setSelected={setSelected}
                disabled={disabled}
              />
            </Flex>
          </Card>
        </Stack>
      )}
      <Card my="12px">
        <Flex justify="center" alignItems="center">
          <Text fontSize={['sm', 'md', 'lg']} fontWeight="medium" mr="16px">
            งดออกเสียง
          </Text>
          <CandidateCheckbox
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
