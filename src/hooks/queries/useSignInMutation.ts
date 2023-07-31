import { useMutation } from '@tanstack/react-query'

import { ProfileService } from '../../utils/api/ProfileService'
import { SignInInfo } from '../../utils/types/SignIn'

export const useSignInMutation = () =>
  useMutation((signInInfo: SignInInfo) => ProfileService.signIn(signInInfo), {})
