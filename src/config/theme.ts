import { extendTheme, Theme, theme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import { GlobalStyleProps } from '@chakra-ui/theme-tools'

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
    useSystemColorMode: true,
    initialColorMode: 'light',
  },
  styles,
  colors: {
    ...theme.colors,
    intaniaRed: {
      50: '#f4e7e8',
      100: '#eacfd0',
      200: '#d49fa1',
      300: '#bf7072',
      400: '#a94043',
      500: '#941014',
      600: '#760d10',
      700: '#590a0c',
      800: '#3b0608',
      900: '#1e0304',
    },
    intaniaRedSecondary: {
      50: '#f5e9ea',
      100: '#ead4d5',
      200: '#d5a8ab',
      300: '#c07d80',
      400: '#ab5156',
      500: '#96262c',
      600: '#781e23',
      700: '#5a171a',
      800: '#3c0f12',
      900: '#1e0809',
    },
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
