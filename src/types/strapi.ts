export interface StrapiUser {
  id: number
  username: string
  email: string
  provider: string
  confirmed: boolean
  blocked: boolean
  role: StrapiRole
  created_at: Date
  updated_at: Date
  policyAccepted: boolean
}

export interface StrapiRole {
  id: number
  name: string
  description: string
  type: string
}
