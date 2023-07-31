import { useQuery, UseQueryOptions } from '@tanstack/react-query'

import { useUserProfileStore } from '../../store/userProfile'
import { UserOrdersService } from '../../utils/api/UserOrdersService'
import { UserOrdersResponse } from '../../utils/types/TicketPayment'

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
