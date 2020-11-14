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
  }
`

export const PrimaryButton: ComponentWithAs<'button', ButtonProps> = (
  props,
) => {
  const scheme = useColorModeValue('intaniaRed', 'intaniaRedSecondary')
  return (
    <LightMode>
      <StyledButton colorScheme={scheme} {...props} />
    </LightMode>
  )
}
