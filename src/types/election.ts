export interface Candidate {
  id: number
  name: string
  year: number
  department: string
  policy: string
}

export interface Position {
  id: number
  position: string
  candidates: Candidate[]
}

export interface Election {
  id: number
  name: string
  positions: Position[]
  startDate: string
  endDate: string
}
