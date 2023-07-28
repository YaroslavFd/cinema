import { useQuery } from '@tanstack/react-query'
import React from 'react'

import { PosterFilmsService } from '../../../../utils/api/PosterFilmsService'
import { combinePlacesToArray } from '../../../../utils/combinePlacesToArray'
import { convertDate } from '../../../../utils/convertDate'
import { Ticket as TicketType } from '../../../../utils/types/TicketPayment'
import { SelectedSeats } from '../../../TicketsOrder/SelectedSeats.tsx'

import styles from './styles.module.scss'

interface TicketProps {
  orderNumber: number
  tickets: TicketType[]
  id: string
}

export const Ticket: React.FC<TicketProps> = ({ orderNumber, tickets, id }) => {
  const combinedPlacesArray = combinePlacesToArray(tickets)
  const date = convertDate(tickets[0].seance.date).split(',').reverse().join(', ')

  const { data } = useQuery({
    queryKey: ['films'],
    queryFn: PosterFilmsService.getFilms
  })

  const film = data?.films.find((film) => String(film.id) === String(id))

  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <span>{date}</span>
        <span>{tickets[0].seance.time}</span>
      </div>
      <div className={styles.center}>
        <h3>{film?.name}</h3>
        <SelectedSeats selectedSeats={combinedPlacesArray} isNamedPlace />
      </div>
      <div className={styles.bottom}>
        <div className={styles.status}>оплачен</div>
        <div className={styles.code}>код билета {orderNumber}</div>
      </div>
    </div>
  )
}
