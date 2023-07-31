import { useMutation } from '@tanstack/react-query'

import { AuthService } from '../../utils/api/AuthService'
import { CreateOtp } from '../../utils/types/Otp'

export const useOtpMutation = () => useMutation((phone: CreateOtp) => AuthService.otp(phone), {})
