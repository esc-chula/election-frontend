/* eslint-disable react/prop-types */
import React from 'react'
import {
  Button,
  ButtonProps,
  ComponentWithAs,
  LightMode,
  useColorModeValue,
} from '@chakra-ui/react'
import styled from '@emotion/styled'

const StyledButton = styled(Button)`
  p {
    color: white !important;
    background-color: #9ae6b4 !important;
  }
`

export const PrimaryButton: ComponentWithAs<'button', ButtonProps> = (
  props,
) => {
  const scheme = useColorModeValue('intaniaRed', 'intaniaRedSecondary')
  return (
    <LightMode>
      <StyledButton
        colorScheme={props?.isConfirmVote ? 'green' : scheme}
        {...props}
      />
    </LightMode>
  )
}
