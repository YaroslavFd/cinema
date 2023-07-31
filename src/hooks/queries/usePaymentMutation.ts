import { useMutation } from '@tanstack/react-query'

import { UserOrdersService } from '../../utils/api/UserOrdersService'
import { TicketPayment } from '../../utils/types/TicketPayment'

export const usePaymentMutation = () =>
  useMutation({
    mutationFn: (paymentData: TicketPayment) => UserOrdersService.ticketPayment(paymentData)
  })
