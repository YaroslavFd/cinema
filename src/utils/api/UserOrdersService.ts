import { TicketPayment, TicketPaymentResponse, UserOrdersResponse } from '../../types'
import { instance } from './instance'

export const UserOrdersService = {
  ticketPayment: async (paymentData: TicketPayment): Promise<TicketPaymentResponse> => {
    const response = await instance.post('/payment', paymentData)
    return response.data
  },

  getUserOrders: async (token: string): Promise<UserOrdersResponse> => {
    const response = await instance.get('/orders', {
      headers: { Authorization: `Bearer ${token}` }
    })
    return response.data
  }
}
