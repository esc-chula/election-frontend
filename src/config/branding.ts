import { APP_BRANDING } from '../config/env'

interface Tone {
  [50]: string
  [100]: string
  [200]: string
  [300]: string
  [400]: string
  [500]: string
  [600]: string
  [700]: string
  [800]: string
  [900]: string
}

interface BrandPalette {
  primary: Tone
  alternate?: Tone
}

const esc: BrandPalette = {
  primary: {
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
  alternate: {
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
}

const example: BrandPalette = {
  primary: {
    50: '#E6FFFA',
    100: '#B2F5EA',
    200: '#81E6D9',
    300: '#4FD1C5',
    400: '#38B2AC',
    500: '#319795',
    600: '#2C7A7B',
    700: '#285E61',
    800: '#234E52',
    900: '#1D4044',
  },
}

let current: BrandPalette = undefined
switch (APP_BRANDING) {
  case 'esc':
    current = esc
    break
  case 'example':
    current = example
    break
}
export { current as brandPalette }
