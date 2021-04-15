import { StrapiUser } from './strapi'

export interface ExchangeTokenDTO {
  jwt: string
  user: StrapiUser
}

export interface BallotDTO {
  positionID: number
  candidateID: number
}

export interface SubmitVoteDTO {
  electionID: number
  ballots: BallotDTO[]
}
