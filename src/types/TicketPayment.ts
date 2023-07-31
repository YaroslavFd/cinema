import { Person, Seat } from '../store'
import { DebitCard } from './DebitCard'
import { FilmSeanceTime } from './FilmSchedule'

export interface Ticket {
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
  tickets: Seat[]
}

export interface TicketOrder {
  filmName?: string
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
