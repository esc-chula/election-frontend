import { Box } from '@chakra-ui/core'
import styled, { WithTheme } from '@emotion/styled'
import appTheme, { AppTheme } from 'config/theme'

const Container = styled(Box)<WithTheme<unknown, AppTheme>>`
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
  margin: 0 10px;

  @media screen and (min-width: 350px) {
    margin: 0 24px;
  }

  @media screen and (min-width: ${appTheme.breakpoints[0]}) {
    margin: 0 auto;
    width: 768px;
  }

  @media screen and (min-width: ${appTheme.breakpoints[1]}) {
    width: 960px;
  }
`

export default Container
