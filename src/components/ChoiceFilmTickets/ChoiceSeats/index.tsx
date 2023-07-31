import React from 'react'

import { useFetchOrders } from '../../../hooks/queries'
import { useOrderTicketsStore, useSeanceStore } from '../../../store'
import { getReservedSeats } from '../../../utils'
import { RowNumbers } from './RowNumbers'
import { Seat } from './Seat'

import styles from './styles.module.scss'

export const ChoiceSeats: React.FC = () => {
  const { initialTicketInfo, resetOrderTicketInfo, orderPaidStatus } = useOrderTicketsStore((state) => ({
    initialTicketInfo: state.initialTicketInfo,
    resetOrderTicketInfo: state.resetOrderTicketInfo,
    orderPaidStatus: state.orderPaidStatus
  }))

  const { seance, resetSeance } = useSeanceStore((state) => ({
    seance: state.seance,
    resetSeance: state.resetSeance
  }))

  const seatsArray = seance?.hall.places
  const rowQuantity = seance?.hall.places.length

  const { data } = useFetchOrders(orderPaidStatus)

  const reservedSeats = getReservedSeats(
    data?.orders || [],
    initialTicketInfo?.id || '',
    initialTicketInfo?.date || '',
    initialTicketInfo?.time || ''
  )

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
                {row.map((seat, seatIndex) => {
                  const isPurchased = reservedSeats.some(
                    (seat) => seat.row === rowIndex + 1 && seat.column === seatIndex + 1
                  )
                  return (
                    <Seat
                      rowNum={rowIndex + 1}
                      seatNum={seatIndex + 1}
                      price={seat.price}
                      type={isPurchased ? 'PURCHASED' : seat.type}
                      key={seatIndex}
                    />
                  )
                })}
              </div>
            ))}
        </div>
        <RowNumbers quantity={rowQuantity} />
      </div>
    </div>
  )
}
