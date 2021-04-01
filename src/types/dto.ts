import { StrapiUser } from './strapi'

export interface ExchangeTokenDTO {
  jwt: string
  user: StrapiUser
}

export interface SubmitVoteDTO {
  electionID: number
  candidateIDs: number[]
}
