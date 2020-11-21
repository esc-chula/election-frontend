import React from 'react'
import { Box, Flex, Stack, Text } from '@chakra-ui/react'
import { Position } from 'types/election'
import Card from './Card'
import { CandidateCard, Checkbox } from './CandidateCard'
import { useIntaniaRed } from 'util/hooks'

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

  return (
    <Box pt="16px">
      <Card fontWeight="300" textAlign="center" fontSize={['sm', 'md', 'lg']}>
        กาลงในช่อง
        <Box
          display="inline-block"
          mx="8px"
          borderWidth="2px"
          borderColor={useIntaniaRed()}
          boxSize="20px"
          rounded="sm"
          transform="translateY(4px)"
        />
        <Box display={['none', 'none']} />
        ของหมายเลขที่คุณต้องการเลือก
      </Card>
      <Flex flexDirection={['column', 'row']} flexWrap="wrap" mx={[0, '-6px']}>
        {position.candidates.map((candidate) => (
          <CandidateCard
            key={candidate.id}
            candidate={candidate}
            selected={selected}
            setSelected={setSelected}
            disabled={disabled}
            w={isSingular ? '100%' : ['100%', '354px', '474px']}
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
              <Text fontSize={['sm', 'md', 'lg']} fontWeight="medium" mr="16px">
                รับรอง
              </Text>
              <Checkbox
                index={-2}
                selected={selected}
                setSelected={setSelected}
                disabled={disabled}
              />
            </Flex>
          </Card>
          <Card flexGrow={1}>
            <Flex justify="center" alignItems="center">
              <Text fontSize={['sm', 'md', 'lg']} fontWeight="medium" mr="16px">
                ไม่รับรอง
              </Text>
              <Checkbox
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
