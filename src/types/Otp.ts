export interface CreateOtp {
  phone: string
}

export interface OtpResponse {
  success: boolean
  reason: string
  retryDelay: number
}
