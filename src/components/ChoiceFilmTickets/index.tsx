import React from 'react'

import { useOrderTicketsStore } from '../../store/orderTickets'
import { TicketsOrder } from '../TicketsOrder'
import { ChoiceSeats } from './ChoiceSeats'
import { SeatsInformation } from './SeatsInformation'

import styles from './styles.module.scss'

interface IChoiceFilmTicketsProps {
  onBuyButtonClick: () => void
}

export const ChoiceFilmTickets: React.FC<IChoiceFilmTicketsProps> = ({ onBuyButtonClick }) => {
  const initialTicketInfo = useOrderTicketsStore((state) => state.initialTicketInfo)

  return (
    <>
      <div className={styles.content}>
        <div className={styles.choiceSeatsBox}>
          <ChoiceSeats />
          {initialTicketInfo && <SeatsInformation />}
        </div>
        {initialTicketInfo && (
          <TicketsOrder ticketInfo={initialTicketInfo} onBuyButtonClick={onBuyButtonClick} />
        )}
      </div>
    </>
  )
}
