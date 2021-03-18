import { extendTheme, Theme, theme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import { GlobalStyleProps } from '@chakra-ui/theme-tools'
import { isDarkMode } from 'util/functions'
import { branding } from './branding'

const breakpoints = createBreakpoints({
  sm: '768px',
  md: '1280px',
  lg: '1280px',
  xl: '1280px',
})

function mode<T>(lightMode: T, darkMode: T): (props: GlobalStyleProps) => T {
  return (props) => (props.colorMode === 'dark' ? darkMode : lightMode)
}

const styles: Theme['styles'] = {
  global: (props) => ({
    'html, body': {
      bg: mode('#fcfcfc', 'gray.800')(props),
      transition: 'none',
    },
  }),
}

const appTheme = extendTheme({
  config: {
    initialColorMode: isDarkMode() ? 'dark' : 'light',
  },
  styles,
  colors: {
    ...theme.colors,
    intaniaRed: branding.palette.primary,
    intaniaRedSecondary: branding.palette.alternate ?? branding.palette.primary,
    mono: {
      0: '#FFFFFF',
      1: '#E0E0E0',
      2: '#BDBDBD',
      3: '#828282',
      4: '#4F4F4F',
      5: '#333333',
      6: '#2A282A',
    },
  },
  breakpoints,
  fonts: {
    body: 'Kanit, sans-serif',
    heading: 'Kanit, sans-serif',
    mono: 'Kanit, sans-serif',
  },
  fontSizes: {
    '2xs': '10px',
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '28px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '64px',
  },
  fontWeights: {
    thin: 100,
    hairline: 100,
    extraLight: 200,
    light: 300,
    regular: 400,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
})

export type AppTheme = typeof appTheme

export default appTheme
