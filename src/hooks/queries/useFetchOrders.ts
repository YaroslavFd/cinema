import { useQuery, UseQueryOptions } from '@tanstack/react-query'

import { useUserProfileStore } from '../../store'
import { UserOrdersResponse } from '../../types'
import { UserOrdersService } from '../../utils/api'

export const useFetchOrders = (
  orderPaidStatus?: boolean,
  options?: UseQueryOptions<UserOrdersResponse>
) => {
  const profile = useUserProfileStore((state) => state.profile)
  const isAuth = useUserProfileStore((state) => state.isAuth)

  return useQuery<UserOrdersResponse>(
    ['orders', { orderPaidStatus }],
    () => UserOrdersService.getUserOrders(profile.token),
    {
      ...options,
      enabled: isAuth
    }
  )
}
