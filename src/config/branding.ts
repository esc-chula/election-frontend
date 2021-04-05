import { APP_BRANDING } from '../config/env'
import { escBranding } from './esc'
import { exampleBranding } from './example'

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

export interface Rule {
  header?: string
  contents: (string | JSX.Element)[]
}

export interface Branding {
  rules: Rule[]
  palette: BrandPalette
  fbName?: string
  fbLink?: string
  igName?: string
  igLink?: string
  website?: string
  logoURL: string
  logoDarkURL: string
  electionName: string
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
    console.error('APP_BRANDING IS NOT SET.')
}
export { current as branding }
