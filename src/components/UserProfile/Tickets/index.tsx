import { useQuery } from '@tanstack/react-query'
import React from 'react'

import { useUserProfileStore } from '../../../store/userProfile'
import { Spinner } from '../../../UI/Spinner'
import { UserOrdersService } from '../../../utils/api/UserOrdersService'
import { ContentError } from '../../ContentError'
import { Ticket } from './Ticket'

import styles from './styles.module.scss'

export const Tickets: React.FC = () => {
  const profile = useUserProfileStore((state) => state.profile)

  const { data, isLoading, isError } = useQuery({
    queryKey: ['orders'],
    queryFn: () => UserOrdersService.getUserOrders(profile.token)
  })

  const arrayOrders = data?.orders

  if (isError) {
    return (
      <div className={styles.wrapper}>
        <ContentError isSmall />
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className={styles.wrapper}>
        <Spinner />
      </div>
    )
  }

  return (
    <div className={styles.wrapper}>
      {!arrayOrders?.length && (
        <p className={styles.emptyMessage}>
          У&nbsp;вас пока нет купленных билетов. Посетите нашу страницу с&nbsp;афишей и&nbsp;выберите
          интересующий вас фильм. Приятного просмотра! 🙂
        </p>
      )}
      {arrayOrders?.map((order) => {
        const matchingOrder = arrayOrders.find((orderNum) => order.orderNumber === orderNum.orderNumber)
        const id = matchingOrder ? matchingOrder.tickets[0].filmId : ''

        return <Ticket key={order.orderNumber} {...order} id={id} />
      })}
    </div>
  )
}
