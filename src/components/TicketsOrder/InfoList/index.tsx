import React from 'react'

import { InitialTicketInfo, useOrderTicketsStore } from '../../../store/orderTickets'
import { convertDate } from '../../../utils/convertDate'
import { convertRatingToRussian } from '../../../utils/convertRatingToRussian'
import { SelectedSeats } from '../SelectedSeats.tsx'

import styles from './styles.module.scss'

interface InfoListProps {
  ticketInfo: InitialTicketInfo
}

export const InfoList: React.FC<InfoListProps> = ({ ticketInfo }) => {
  const chosenSeats = useOrderTicketsStore((state) => state.chosenSeats)
  const date = convertDate(ticketInfo.date).split(',')[1].trim()
  const ageRating = convertRatingToRussian(ticketInfo.ageRating)

  return (
    <ul className={styles.infoList}>
      <li className={styles.infoItem}>
        <h4>Фильм:</h4>
        <p>
          {ticketInfo.title} ({ageRating})
        </p>
      </li>
      <li className={styles.infoItem}>
        <h4>Дата и время:</h4>
        <p>
          {date} {ticketInfo.time}
        </p>
      </li>
      <li className={styles.infoItem}>
        <h4>Места:</h4>
        {chosenSeats.length ? <SelectedSeats selectedSeats={chosenSeats} /> : <p>Выберите места</p>}
      </li>
    </ul>
  )
}
