export interface StrapiUser {
  id: number
  username: string
  email: string
  name_th: string
  name_en: string
  provider: string
  confirmed: boolean
  blocked: boolean
  role: StrapiRole
  created_at: Date
  updated_at: Date
  policyAccepted: boolean
  ruleAccepted: string
}

export interface StrapiRole {
  id: number
  name: string
  description: string
  type: string
}
