import { TicketOrder } from '../types'

type reservedSeatType = {
  row: number
  column: number
}

export const getReservedSeats = (orders: TicketOrder[], filmId: string, date: string, time: string) => {
  const reservedSeats: Array<reservedSeatType> = []

  orders.forEach((order) => {
    order.tickets.forEach((ticket) => {
      if (ticket.filmId === filmId && ticket.seance.date === date && ticket.seance.time === time) {
        reservedSeats.push({ row: ticket.row, column: ticket.column })
      }
    })
  })

  return reservedSeats
}
