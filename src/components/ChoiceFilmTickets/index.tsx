import React from 'react'

import { useOrderTicketsStore } from '../../store/orderTickets'
import { TicketsOrder } from '../TicketsOrder'
import { ChoiceSeats } from './ChoiceSeats'

import styles from './styles.module.scss'

export const ChoiceFilmTickets: React.FC = () => {
  const initialTicketInfo = useOrderTicketsStore((state) => state.initialTicketInfo)

  return (
    <div className={styles.wrapper}>
      <ChoiceSeats />
      {initialTicketInfo && <TicketsOrder ticketInfo={initialTicketInfo} />}
    </div>
  )
}
