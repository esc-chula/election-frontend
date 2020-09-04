import { StrapiUser } from './strapi'

export interface ExchangeTokenDTO {
  jwt: string
  user: StrapiUser
}
