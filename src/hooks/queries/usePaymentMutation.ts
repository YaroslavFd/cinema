import { useMutation } from '@tanstack/react-query'

import { TicketPayment } from '../../types'
import { UserOrdersService } from '../../utils/api'

export const usePaymentMutation = () =>
  useMutation({
    mutationFn: (paymentData: TicketPayment) => UserOrdersService.ticketPayment(paymentData)
  })
