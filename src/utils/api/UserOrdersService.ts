import { TicketPayment, TicketPaymentResponse, UserOrdersResponse } from '../types/TicketPayment'
import { instance } from './instance'

export const UserOrdersService = {
  ticketPayment: async (paymentData: TicketPayment): Promise<TicketPaymentResponse> => {
    const response = await instance.post('/payment', paymentData)
    return response.data
  },

  getUserOrders: async (): Promise<UserOrdersResponse> => {
    const response = await instance.get('/orders')
    return response.data
  }
}
