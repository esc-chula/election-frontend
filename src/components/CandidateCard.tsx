import {
  BoxProps,
  ControlBox,
  Icon,
  Image,
  Text,
  VisuallyHidden,
  Stack,
  AspectRatioBox,
} from '@chakra-ui/core'
import { API_HOST } from 'config/env'
import React, { ChangeEventHandler, useCallback } from 'react'
import { Candidate } from 'types/election'
import { academicYear } from 'util/constants'
import Card from './Card'

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
      <Stack direction="row" spacing="15px">
        <Stack spacing="5px">
          <AspectRatioBox minW="100px" ratio={3 / 4}>
            <Image src={`${API_HOST}${candidate.avatar?.url}`} />
          </AspectRatioBox>
          <Stack direction="row" alignSelf="center">
            <Text fontSize="small" fontWeight="medium">
              หมายเลข {candidate.id}
            </Text>
            <Checkbox
              index={candidate.id}
              selected={selected}
              setSelected={setSelected}
              disabled={disabled}
            />
          </Stack>
        </Stack>

        <Stack spacing="2px" width="100%">
          <Text
            fontSize={['sm', 'lg', 'xl']}
            fontWeight="regular"
            alignSelf="flex-start"
          >
            {candidate.name}
          </Text>
          <Text
            fontSize={['2xs', 'xs', 'xs']}
            fontWeight="extraLight"
            alignSelf="flex-start"
          >
            วิศวกรรม{candidate.department} ปี{' '}
            {academicYear - candidate.year + 1}
          </Text>
          <hr />
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
  return (
    <label>
      <VisuallyHidden as="input" {...{ type: 'checkbox', checked, onChange }} />

      <ControlBox
        borderWidth="1.5px"
        size="24px"
        cursor={!disabled ? 'pointer' : undefined}
        rounded="sm"
        borderColor="intaniaRed.600"
        _checked={{
          bg: 'intaniaRed.600',
          color: 'white',
          borderColor: 'intaniaRed.600',
        }}
        _focus={{ borderColor: 'intaniaRed.700', boxShadow: 'outline' }}
      >
        <Icon name="close" size="16px" />
      </ControlBox>
    </label>
  )
}
