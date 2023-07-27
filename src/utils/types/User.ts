export interface User {
  phone: string
  firstname?: string
  middlename?: string
  lastname?: string
  email?: string
  city?: string
}

export interface UserProfile {
  user: User
  token: string
}
