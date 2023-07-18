import React from 'react'

import { InitialTicketInfo, useOrderTicketsStore } from '../../store/orderTickets'
import { Button } from '../../UI/Button'
import { convertDate } from '../../utils/convertDate'
import { convertHallName } from '../../utils/convertHallName'
import { convertRatingToRussian } from '../../utils/convertRatingToRussian'
import { SelectedSeats } from './SelectedSeats.tsx'

import styles from './styles.module.scss'

interface ITicketsOrderProps {
  ticketInfo: InitialTicketInfo
}

export const TicketsOrder: React.FC<ITicketsOrderProps> = ({ ticketInfo }) => {
  const price = useOrderTicketsStore((state) => state.price)
  const chosenSeats = useOrderTicketsStore((state) => state.chosenSeats)

  const date = convertDate(ticketInfo.date).split(',')[1].trim()
  const hallName = convertHallName(ticketInfo.hallName)
  const ageRating = convertRatingToRussian(ticketInfo.ageRating)
  return (
    <div className={styles.wrapper}>
      <h3>{hallName}</h3>
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
      <div className={styles.payment}>
        <h4>
          Сумма: <span>{price}руб</span>
        </h4>
        <Button disabled={price ? false : true} isIcon>
          Купить
        </Button>
      </div>
    </div>
  )
}
