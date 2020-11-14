import {
  BoxProps,
  ControlBox,
  Image,
  Text,
  VisuallyHidden,
  Stack,
  AspectRatio,
  StackProps,
  Divider,
} from '@chakra-ui/react'
import { API_HOST } from 'config/env'
import React, { ChangeEventHandler, useCallback } from 'react'
import { Candidate } from 'types/election'
import Card from './Card'
import { CloseIcon } from '@chakra-ui/icons'
import { useIntaniaRed } from 'util/hooks'

type CandidateCardProps = BoxProps &
  Omit<CheckboxProps, 'index'> & {
    candidate: Candidate
  }

export function CandidateCard({
  candidate,
  selected,
  setSelected,
  disabled,
  ...rest
}: CandidateCardProps) {
  return (
    <Card {...rest}>
      <CardHeader candidate={candidate} display={['none', 'block']} />
      <Stack direction="row" spacing="15px">
        <Stack spacing="5px">
          <AspectRatio minW="100px" ratio={3 / 4}>
            <Image
              src={
                candidate.avatar
                  ? `${API_HOST}${candidate.avatar.url}`
                  : undefined
              }
            />
          </AspectRatio>
          <Stack direction="row" alignSelf="center">
            <Text fontSize="small" fontWeight="medium">
              หมายเลข {candidate.candidateID}
            </Text>
            <Checkbox
              index={candidate.id}
              selected={selected}
              setSelected={setSelected}
              disabled={disabled}
            />
          </Stack>
        </Stack>

        <Stack spacing="2px">
          <CardHeader candidate={candidate} display={['block', 'none']} />
          <Text
            fontSize={['xs', 'sm', 'md']}
            fontWeight={['extraLight', 'light']}
            alignSelf="flex-start"
            textAlign="start"
          >
            {candidate.policy}
          </Text>
        </Stack>
      </Stack>
    </Card>
  )
}

function CardHeader({
  candidate,
  ...props
}: { candidate: Candidate } & StackProps) {
  return (
    <Stack spacing="2px" {...props}>
      <Text fontSize={['sm', 'lg', 'xl']} fontWeight="regular">
        {candidate.name}
      </Text>
      <Text fontSize={['2xs', 'xs', 'xs']} fontWeight="extraLight">
        {candidate.department} ปี {candidate.year}
      </Text>
      <Divider mb={['0', '8px']} />
    </Stack>
  )
}

interface CheckboxProps {
  index: number
  selected: number
  setSelected: (selected: number) => void
  disabled: boolean
}

export function Checkbox({
  index,
  selected,
  setSelected,
  disabled,
}: CheckboxProps) {
  const checked = selected === index
  const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      if (!disabled && e.target.value) {
        setSelected(index)
      }
    },
    [index, setSelected, disabled],
  )
  const intaniaRed = useIntaniaRed()
  return (
    <label>
      <VisuallyHidden as="input" {...{ type: 'checkbox', checked, onChange }} />

      <ControlBox
        borderWidth="1.5px"
        boxSize="24px"
        cursor={!disabled ? 'pointer' : undefined}
        rounded="sm"
        borderColor={intaniaRed}
        _checked={{
          bg: intaniaRed,
          color: 'white',
          borderColor: intaniaRed,
        }}
        _focus={{ borderColor: 'intaniaRed.600', boxShadow: 'outline' }}
      >
        <CloseIcon boxSize="16px" />
      </ControlBox>
    </label>
  )
}
