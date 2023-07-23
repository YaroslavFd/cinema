import { Seats } from '../../store/orderTickets'
import { Person } from '../../store/userInfo'
import { DebitCard } from './DebitCard'
import { FilmSeanceTime } from './FilmSchedule'

interface Ticket {
  filmId: string
  row: number
  column: number
  seance: FilmSeanceTime
  phone: string
}

export interface TicketPayment {
  filmId: string
  person: Person
  debitCard: DebitCard
  seance: FilmSeanceTime
  tickets: Seats[]
}

export interface TicketOrder {
  filmName: string
  orderNumber: number
  tickets: Ticket[]
  phone: string
  status: 'PAYED' | 'CANCELED'
}

export interface TicketPaymentResponse {
  success: boolean
  order: TicketOrder
}

export interface UserOrdersResponse {
  success: boolean
  reason: string
  orders: TicketOrder[]
}
