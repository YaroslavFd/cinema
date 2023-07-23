import React from 'react'

import { useOrderTicketsStore } from '../../store/orderTickets'
import { ErrorOrderInfo } from './ErrorOrderInfo'
import { PendingOrderInfo } from './PendingOrderInfo'
import { SuccessOrderInfo } from './SuccessOrderInfo'

import styles from './styles.module.scss'

interface OrderInfoProps {
  orderNumber: number
  status: 'success' | 'error' | 'loading' | 'idle'
}

export const OrderInfo: React.FC<OrderInfoProps> = ({ orderNumber, status }) => {
  const initialTicketInfo = useOrderTicketsStore((state) => state.initialTicketInfo)

  if (status === 'success' && initialTicketInfo) {
    return <SuccessOrderInfo ticketInfo={initialTicketInfo} orderNumber={orderNumber} />
  }

  if (status === 'error') {
    return <ErrorOrderInfo />
  }

  if (status === 'loading') {
    return <PendingOrderInfo />
  }

  return null
}
