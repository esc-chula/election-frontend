import { Stack } from '@chakra-ui/react'
import styled from '@emotion/styled'
import appTheme from 'config/theme'

export const ResponsiveStack = styled(Stack)`
  flex-direction: column;

  @media screen and (min-width: ${appTheme.breakpoints.sm}) {
    flex-direction: row;
  }
`
