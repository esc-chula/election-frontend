export interface ImageAsset {
  name: string
  ext: string
  url: string
  hash: string
  mime: string
  size: number
  width: number
  height: number
}

export interface ImageInfo {
  id: number
  formats: Record<string, ImageAsset>
}

export interface Member {
  id: number
  name: string
  year: number
  department: string
  policy: string
  position: string
  avatar: ImageInfo & ImageAsset
}

export interface Candidate {
  id: number
  name: string
  candidateID: number
  members: Member[]
  policy: string
}

export interface Position {
  id: number
  name: string
  candidates: Candidate[]
}

export interface Election {
  id: number
  name: string
  positions: Position[]
  startDate: string
  endDate: string
  voted: boolean
}
