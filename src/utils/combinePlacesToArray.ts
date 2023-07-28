import { Ticket } from './types/TicketPayment'

export const combinePlacesToArray = (tickets: Ticket[]) =>
  tickets.reduce((result: { row: number; column: number }[], ticket) => {
    if (ticket.row && ticket.column) {
      result.push({ row: ticket.row, column: ticket.column })
    }
    return result
  }, [])
