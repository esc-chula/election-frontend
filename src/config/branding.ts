import { APP_BRANDING } from '../config/env'
import { escBranding } from './esc-branding'

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

export interface BrandPalette {
  primary: Tone
  alternate?: Tone
}

const examplePalette: BrandPalette = {
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

const exampleRules: Rule[] = []
const exampleBranding: Branding = {
  rules: exampleRules,
  palette: examplePalette,
}

interface Rule {
  header?: string
  contents: (string | JSX.Element)[]
}

export interface Branding {
  rules: Rule[]
  palette: BrandPalette
}

let current: Branding
switch (APP_BRANDING) {
  case 'esc':
    current = escBranding
    break
  case 'example':
    current = exampleBranding
    break
  default:
    console.error('APP BRANDING IS NOT SET.')
}
export { current as branding }
