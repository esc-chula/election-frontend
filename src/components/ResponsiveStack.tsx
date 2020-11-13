import { FlexProps, Stack, StackProps } from '@chakra-ui/core'
import styled, { WithTheme } from '@emotion/styled'
import css from '@emotion/css'
import appTheme from 'config/theme'

type ResponsiveStackProps = Omit<StackProps, 'direction'> & {
  mobileDirection: FlexProps['flexDirection']
  desktopDirection: FlexProps['flexDirection']
}

export const ResponsiveStack = styled(Stack)<
  WithTheme<ResponsiveStackProps, typeof appTheme>
>`
  ${(props) => css`
    flex-direction: ${props.mobileDirection};

    @media screen and (min-width: ${props.theme.breakpoints[0]}) {
      flex-direction: ${props.desktopDirection};
    }
  `}
`
