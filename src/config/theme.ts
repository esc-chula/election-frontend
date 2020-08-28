import { theme } from '@chakra-ui/core'

// Let's say you want to add custom colors
export default {
  ...theme,
  colors: {
    ...theme.colors,
    intaniaRed: {
      xlight: '#FDE8E9',
      light: '#96262C',
      primary: '#941014',
      dark: '#721C20',
    },
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
}
