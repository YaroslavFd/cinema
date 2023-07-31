import { useQuery, UseQueryOptions } from '@tanstack/react-query'

import { useUserProfileStore } from '../../store/userProfile'
import { ProfileService } from '../../utils/api/ProfileService'
import { SessionResponse } from '../../utils/types/User'

export const useFetchSession = (options?: UseQueryOptions<SessionResponse>) => {
  const profile = useUserProfileStore((state) => state.profile)

  return useQuery<SessionResponse>(
    ['session', { profile }],
    () => ProfileService.getSession(profile.token),
    options
  )
}
