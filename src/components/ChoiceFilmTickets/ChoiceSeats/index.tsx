import { useQuery } from '@tanstack/react-query'
import React from 'react'

import { useOrderTicketsStore } from '../../../store/orderTickets'
import { useSeanceStore } from '../../../store/seance'
import { useUserProfileStore } from '../../../store/userProfile'
import { UserOrdersService } from '../../../utils/api/UserOrdersService'
import { getReservedSeats } from '../../../utils/getReservedSeats'
import { RowNumbers } from './RowNumbers'
import { Seat } from './Seat'

import styles from './styles.module.scss'

export const ChoiceSeats: React.FC = () => {
  const initialTicketInfo = useOrderTicketsStore((state) => state.initialTicketInfo)
  const resetOrderTicketInfo = useOrderTicketsStore((state) => state.resetOrderTicketInfo)
  const orderPaidStatus = useOrderTicketsStore((state) => state.orderPaidStatus)

  const seance = useSeanceStore((state) => state.seance)
  const resetSeance = useSeanceStore((state) => state.resetSeance)

  const isAuth = useUserProfileStore((state) => state.isAuth)
  const profile = useUserProfileStore((state) => state.profile)

  const seatsArray = seance?.hall.places
  const rowQuantity = seance?.hall.places.length

  const { data } = useQuery({
    queryKey: ['orders', { orderPaidStatus }],
    queryFn: () => (isAuth ? UserOrdersService.getUserOrders(profile.token) : null)
  })

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
