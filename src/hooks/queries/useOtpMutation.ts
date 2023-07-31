import { useMutation } from '@tanstack/react-query'

import { CreateOtp } from '../../types'
import { AuthService } from '../../utils/api'

export const useOtpMutation = () => useMutation((phone: CreateOtp) => AuthService.otp(phone), {})
