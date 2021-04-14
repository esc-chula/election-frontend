import { Branding } from 'config/branding'
import { palette } from './palette'
import { rules } from './rules'
import econLogo from './econTopBarLogo.png'

const econBranding: Branding = {
  rules,
  palette,
  fbName: 'SMO Econ',
  fbLink: 'https://facebook.com/smoeconcu',
  igName: '@smoeconcu',
  igLink: 'https://instagram.com/smoeconcu',
  logoURL: econLogo,
  logoDarkURL: econLogo,
  electionName:
    'การเลือกตั้งซ่อมคณะกรรมการสโมสรนิสิตคณะเศรษฐศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย ประจำปีการศึกษา 2564',
}

export { econBranding }
