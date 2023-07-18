import React from 'react'

import { useOrderTicketsStore } from '../../../store/orderTickets'
import { useSeanceStore } from '../../../store/seance'
import { RowNumbers } from './RowNumbers'
import { Seat } from './Seat'

import styles from './styles.module.scss'

export const ChoiceSeats: React.FC = () => {
  const seance = useSeanceStore((state) => state.seance)
  const resetSeance = useSeanceStore((state) => state.resetSeance)
  const resetOrderTicketInfo = useOrderTicketsStore((state) => state.resetOrderTicketInfo)

  const seatsArray = seance?.hall.places
  const rowQuantity = seance?.hall.places.length

  React.useEffect(
    () => () => {
      resetSeance()
      resetOrderTicketInfo()
    },
    []
  )

  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>Экран</div>
      <div className={styles.choiceSeats}>
        <RowNumbers quantity={rowQuantity} />
        <div className={styles.seats}>
          {seance === null ? (
            <h3 style={{ fontSize: 22 }}>Выберите дату и время, чтобы купить билеты</h3>
          ) : null}
          {seatsArray?.length &&
            seatsArray.map((row, rowIndex) => (
              <div key={rowIndex} className={styles.row}>
                {row.map((seat, seatIndex) => (
                  <Seat
                    rowNum={rowIndex + 1}
                    seatNum={seatIndex + 1}
                    price={seat.price}
                    type={seat.type}
                    key={seatIndex}
                  />
                ))}
              </div>
            ))}
        </div>
        <RowNumbers quantity={rowQuantity} />
      </div>
    </div>
  )
}
