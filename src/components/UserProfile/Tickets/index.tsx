import React from 'react'

import { useFetchOrders } from '../../../hooks/queries'
import { Spinner } from '../../../UI'
import { ContentError } from '../../ContentError'
import { Ticket } from './Ticket'

import styles from './styles.module.scss'

export const Tickets: React.FC = () => {
  const { data, isLoading, isError } = useFetchOrders()

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
