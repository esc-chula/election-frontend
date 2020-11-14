import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'
import appTheme from 'config/theme'

const Container = styled(Box)`
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
  margin: 0 10px;

  @media screen and (min-width: 350px) {
    margin: 0 24px;
  }

  @media screen and (min-width: ${appTheme.breakpoints.sm}) {
    margin: 0 auto;
    width: 720px;
  }

  @media screen and (min-width: ${appTheme.breakpoints.md}) {
    width: 960px;
  }
`

export default Container
