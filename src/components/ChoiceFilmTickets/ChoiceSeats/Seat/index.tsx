import cn from 'classnames'
import React from 'react'

import { useOrderTicketsStore } from '../../../../store/orderTickets'
import { SeancePlaceType } from '../../../../utils/types/FilmSchedule'

import styles from './styles.module.scss'

interface ISeatProps {
  price: number
  type: SeancePlaceType
  rowNum: number
  seatNum: number
}

export const Seat: React.FC<ISeatProps> = ({ price, type, rowNum, seatNum }) => {
  const chosenSeats = useOrderTicketsStore((state) => state.chosenSeats)
  const addSeats = useOrderTicketsStore((state) => state.addSeats)

  const typeTitle = type === 'COMFORT' ? 'комфорт' : 'эконом'

  let seatType = styles.comfort

  switch (type) {
    case 'COMFORT':
      seatType = styles.comfort
      break
    case 'BLOCKED':
      seatType = styles.taken
      break
    default:
      seatType = ''
      break
  }

  const seatClickHandler = (type: SeancePlaceType) => {
    if (type !== 'BLOCKED') {
      addSeats({ row: rowNum, column: seatNum, price })
    }
  }

  const isActiveSeat = chosenSeats.some(
    (activeSeat) => activeSeat.row === rowNum && activeSeat.column === seatNum
  )

  return (
    <div
      className={cn(styles.seat, seatType, isActiveSeat ? styles.chosen : null)}
      onClick={() => seatClickHandler(type)}
    >
      <div className={styles.popup}>
        <span className={styles.popupSeatType}>{typeTitle}</span>
        <div className={styles.seatNums}>
          <span>{rowNum} ряд</span>
          <span>{seatNum} место</span>
        </div>
        <span className={styles.price}>{price}р</span>
      </div>
    </div>
  )
}
