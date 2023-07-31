import { useMutation } from '@tanstack/react-query'

import { SignInInfo } from '../../types'
import { ProfileService } from '../../utils/api'

export const useSignInMutation = () =>
  useMutation((signInInfo: SignInInfo) => ProfileService.signIn(signInInfo), {})
