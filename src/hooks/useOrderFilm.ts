import { useOrderTicketsStore, useUserInfoStore } from '../store'
import { DebitCard } from '../types'
import { usePaymentMutation } from './queries/usePaymentMutation'
import { useModal } from './useModal'

export const useOrderFilm = () => {
  const person = useUserInfoStore((state) => state.person)

  const initialTicketInfo = useOrderTicketsStore((state) => state.initialTicketInfo)
  const chosenSeats = useOrderTicketsStore((state) => state.chosenSeats)
  const resetChosenSeats = useOrderTicketsStore((state) => state.resetChosenSeats)
  const toggleOrderPaidStatus = useOrderTicketsStore((state) => state.toggleOrderPaidStatus)

  const userInfoModal = useModal(false)
  const cardInfoModal = useModal(false)
  const orderInfoModal = useModal(false)

  const paymentMutation = usePaymentMutation()

  const onBuyButtonClick = () => {
    userInfoModal.onModalOpen()
  }

  const onUserInfoSubmit = () => {
    userInfoModal.onModalClose()
    cardInfoModal.onModalOpen()
  }

  const onCardInfoSubmit = (cardInfo: DebitCard) => {
    if (!person) {
      return null
    }

    const ticketsOrderInfo = {
      debitCard: cardInfo,
      filmId: initialTicketInfo?.id || '',
      person: person,
      tickets: chosenSeats,
      seance: { date: initialTicketInfo?.date || '', time: initialTicketInfo?.time || '' }
    }

    paymentMutation.mutate(ticketsOrderInfo)

    cardInfoModal.onModalClose()
    orderInfoModal.onModalOpen()
  }

  const closeOrderInfoModal = () => {
    toggleOrderPaidStatus()
    orderInfoModal.onModalClose()
    resetChosenSeats()
  }

  return {
    onBuyButtonClick,
    onUserInfoSubmit,
    onCardInfoSubmit,
    closeOrderInfoModal,
    userInfoModal,
    cardInfoModal,
    orderInfoModal,
    paymentMutation
  }
}
