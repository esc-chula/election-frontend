import {
  BoxProps,
  Image,
  Text,
  Stack,
  AspectRatio,
  StackProps,
  Divider,
  Box,
  ListItem,
} from '@chakra-ui/react'
import { API_HOST } from 'config/env'
import React from 'react'
import { Candidate, Member } from 'types/election'
import Markdown, { MarkdownToJSX } from 'markdown-to-jsx'
import { CandidateCheckbox, CandidateCheckboxProps } from './CandidateCheckbox'
import { useRedText } from 'util/hooks'

type MemberCardProps = BoxProps &
  Omit<CandidateCheckboxProps, 'index'> & {
    candidate: Candidate
    member: Member
    isSingular: boolean
    candidateId: number
  }

const markdownOverrides: MarkdownToJSX.Overrides = {
  h2: {
    component: Text,
    props: {
      fontWeight: 500,
    },
  },
  li: {
    component: ListItem,
    props: {
      ml: '1rem',
      mb: '4px',
    },
  },
}

export function MemberCard({
  member,
  candidate,
  candidateId,
  selected,
  setSelected,
  disabled,
  isSingular,
  ...rest
}: MemberCardProps) {
  const isParty = candidate.members.length !== 1
  return (
    <Box {...rest}>
      <Stack
        direction="row"
        spacing={['8px', '15px']}
        alignItems="center"
        paddingLeft={[isSingular ? '0px' : '10px', '10px']}
      >
        {!isSingular && (
          <CandidateCheckbox
            index={candidate.id}
            selected={selected}
            setSelected={setSelected}
            disabled={disabled}
          />
        )}
        <CardHeader
          member={member}
          candidateId={candidateId}
          display={'block'}
          isParty={isParty}
        />
      </Stack>
      <Stack direction="row" spacing="15px">
        <Stack spacing="8px">
          {/* <AspectRatio minW={['100px', '100px', '130px']} ratio={3 / 4}>
            <Image
              src={
                member.avatar ? `${API_HOST}${member.avatar.url}` : undefined
              }
            />
          </AspectRatio> */}
          {!isParty && (
            <Stack direction="row" alignSelf="center" alignItems="center">
              {/* <Text fontSize={['sm', 'sm', 'md']} fontWeight="medium">
                เบอร์ {candidate.candidateID}
              </Text> */}
              {/* {!isSingular && (
                <CandidateCheckbox
                  index={candidate.id}
                  selected={selected}
                  setSelected={setSelected}
                  disabled={disabled}
                />
              )} */}
            </Stack>
          )}
        </Stack>

        {/* <Stack spacing="2px">
          <CardHeader
            member={member}
            candidateId={candidateId}
            display={['block', 'none']}
            isParty={isParty}
          />
          <Text
            fontSize={['xs', 'sm', 'md']}
            fontWeight={['extraLight', 'light']}
            alignSelf="flex-start"
            textAlign="start"
            as="div"
          >
            <Markdown
              options={{
                overrides: markdownOverrides,
              }}
            >
              {member.policy}
            </Markdown>
          </Text>
        </Stack> */}
      </Stack>
    </Box>
  )
}

function CardHeader({
  member,
  isParty,
  ...props
}: { member: Member; isParty: boolean } & StackProps) {
  const redText = useRedText()
  return (
    <Stack spacing="2px" {...props}>
      <Stack direction="row" alignSelf="center" alignItems="center">
        <Text
          fontSize={['4xl', '5xl']}
          fontWeight="medium"
          paddingLeft="12px"
          paddingRight="12px"
          width={['35px', '50px']}
        >
          {props.candidateId}
        </Text>
        <Stack spacing="2px" {...props}>
          {isParty && (
            <Text
              fontSize={['2xs', 'sm', 'md']}
              fontWeight="regular"
              color={redText}
            >
              ผู้สมัครตำแหน่ง {member.position}
            </Text>
          )}
          <Text fontSize={['sm', 'lg', 'xl']} fontWeight="regular">
            {member.name}
          </Text>
          <Text fontSize={['2xs', 'sm', 'md']} fontWeight="extraLight">
            {member.department} ปี {member.year}
          </Text>
        </Stack>
      </Stack>
    </Stack>
  )
}
