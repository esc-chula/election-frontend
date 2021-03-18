import { CloseIcon } from '@chakra-ui/icons'
import { ControlBox, VisuallyHidden } from '@chakra-ui/react'
import React, { ChangeEventHandler, useCallback } from 'react'
import { useIntaniaRed } from 'util/hooks'

export interface CandidateCheckboxProps {
  index: number
  selected: number
  setSelected: (selected: number) => void
  disabled: boolean
}

export function CandidateCheckbox({
  index,
  selected,
  setSelected,
  disabled,
}: CandidateCheckboxProps) {
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
        borderWidth="2px"
        boxSize={['24px', '24px', '32px']}
        cursor={!disabled ? 'pointer' : undefined}
        rounded="sm"
        borderColor={intaniaRed}
        _checked={{
          bg: intaniaRed,
          color: 'white',
          borderColor: intaniaRed,
        }}
        _focus={{ borderColor: 'intaniaRed.600', boxShadow: 'none' }}
      >
        <CloseIcon boxSize={['16px', '16px', '20px']} />
      </ControlBox>
    </label>
  )
}
