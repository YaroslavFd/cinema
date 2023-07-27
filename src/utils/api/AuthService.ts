import axios from 'axios'

import { CreateOtp, OtpResponse } from '../types/Otp'
import { authInstance } from './instance'

export const AuthService = {
  otp: async (phone: CreateOtp): Promise<OtpResponse> => {
    const response = await authInstance.post('/otp', phone)
    return response.data
  },

  getOtps: async (): Promise<string> => {
    const response = await axios.get('https://shift-backend.onrender.com/otps')
    return response.data
  }
}
