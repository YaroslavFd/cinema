import { useQuery, UseQueryOptions } from '@tanstack/react-query'

import { useUserProfileStore } from '../../store'
import { SessionResponse } from '../../types'
import { ProfileService } from '../../utils/api'

export const useFetchSession = (options?: UseQueryOptions<SessionResponse>) => {
  const profile = useUserProfileStore((state) => state.profile)

  return useQuery<SessionResponse>(
    ['session', { profile }],
    () => ProfileService.getSession(profile.token),
    options
  )
}
