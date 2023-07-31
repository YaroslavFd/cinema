import { UserProfile } from './User'

export interface SignInInfo {
  phone: string
  code: number
}

export interface SignInResponse extends UserProfile {
  success: boolean
  reason: string
}
