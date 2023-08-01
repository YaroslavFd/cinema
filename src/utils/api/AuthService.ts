import axios from 'axios'

import { CreateOtp, OtpResponse } from '../../types'
import { authInstance } from './instance'

export const AuthService = {
  otp: async (phone: CreateOtp): Promise<OtpResponse> => {
    const response = await authInstance.post('/otp', phone)
    return response.data
  },

  getOtps: async (): Promise<string> => {
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/otps`)
    return response.data
  }
}
