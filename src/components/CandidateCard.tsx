import { BoxProps, Text, Flex } from '@chakra-ui/react'
import React from 'react'
import { Candidate } from 'types/election'
import Card from './Card'
import { MemberCard } from './MemberCard'
import { CandidateCheckbox, CandidateCheckboxProps } from './CandidateCheckbox'

type CandidateCardProps = BoxProps &
  Omit<CandidateCheckboxProps, 'index'> & {
    candidate: Candidate
    isSingular: boolean
  }

export function CandidateCard({
  candidate,
  selected,
  setSelected,
  disabled,
  isSingular,
  ...rest
}: CandidateCardProps) {
  const isParty = candidate.members.length !== 1
  return (
    <>
      {isParty && (
        <Flex mt={4} ml={4}>
          <Text fontSize={['sm', 'lg', 'xl']} fontWeight="regular" mr={2}>
            หมายเลข {candidate.candidateID}
          </Text>
          {!isSingular && (
            <CandidateCheckbox
              index={candidate.id}
              selected={selected}
              setSelected={setSelected}
              disabled={disabled}
            />
          )}
        </Flex>
      )}
      <Card {...rest}>
        <Text fontSize={['sm', 'lg', 'xl']} fontWeight="regular" mb={2}>
          {candidate.name}
        </Text>
        <Flex
          flexDirection={['column', 'row']}
          flexWrap="wrap"
          mx={[0, '-6px']}
          mt={-4}
        >
          {candidate.members.map((member) => (
            <MemberCard
              key={member.id}
              member={member}
              candidate={candidate}
              selected={selected}
              setSelected={setSelected}
              disabled={disabled}
              isSingular={isSingular}
              w={!isParty ? '100%' : ['100%', '342px', '462px']}
              mx={[0, '6px']}
              mt={4}
            />
          ))}
        </Flex>
      </Card>
    </>
  )
}
