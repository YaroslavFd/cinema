import { useMutation, useQueries } from '@tanstack/react-query'
import React from 'react'
import { useParams } from 'react-router-dom'

import { CardInfoForm } from '../components/CardInfoForm'
import { ChoiceFilmTickets } from '../components/ChoiceFilmTickets'
import { FilmInfo } from '../components/FilmInfo'
import { FilmSchedule } from '../components/FilmSchedule'
import { Modal } from '../components/Modal'
import { OrderInfo } from '../components/OrderInfo'
import { UserInfoForm } from '../components/UserInfoForm'
import { useModal } from '../hooks/useModal'
import { useOrderTicketsStore } from '../store/orderTickets'
import { useUserInfoStore } from '../store/userInfo'
import { PosterFilmsService } from '../utils/api/PosterFilmsService'
import { UserOrdersService } from '../utils/api/UserOrdersService'
import { DebitCard } from '../utils/types/DebitCard'
import { TicketPayment } from '../utils/types/TicketPayment'

export const FilmInfoPage: React.FC = () => {
  const { id } = useParams()

  const person = useUserInfoStore((state) => state.person)
  const initialTicketInfo = useOrderTicketsStore((state) => state.initialTicketInfo)
  const chosenSeats = useOrderTicketsStore((state) => state.chosenSeats)

  const {
    mutate,
    status: paymentStatus,
    data: paymentData
  } = useMutation({
    mutationFn: (paymentData: TicketPayment) => UserOrdersService.ticketPayment(paymentData)
  })

  if (!Number(id)) {
    return <div>Error</div>
  }

  const queries = useQueries({
    queries: [
      {
        queryKey: ['film'],
        queryFn: () => PosterFilmsService.getFilm(String(id))
      },
      {
        queryKey: ['schedule'],
        queryFn: () => PosterFilmsService.getFilmShedule(String(id))
      }
    ]
  })

  const filmQuery = queries[0]
  const scheduleQuery = queries[1]

  const filmData = filmQuery.data
  const scheduleData = scheduleQuery.data
  const isLoading = filmQuery.isLoading || scheduleQuery.isLoading
  const isError = filmQuery.isError || scheduleQuery.isError

  const userInfoModal = useModal(false)
  const cardInfoModal = useModal(false)
  const orderInfoModal = useModal(false)

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
      filmId: id || '',
      person: person,
      tickets: chosenSeats,
      seance: { date: initialTicketInfo?.date || '', time: initialTicketInfo?.time || '' }
    }

    mutate(ticketsOrderInfo)

    cardInfoModal.onModalClose()
    orderInfoModal.onModalOpen()
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error</div>
  }

  return (
    <section className="section film-info-section">
      {filmData && <FilmInfo film={filmData.film} />}
      {scheduleData && filmData && (
        <FilmSchedule schedules={scheduleData.schedules} film={filmData.film} />
      )}
      <ChoiceFilmTickets onBuyButtonClick={onBuyButtonClick} />

      <Modal isOpened={userInfoModal.isOpened} onClose={userInfoModal.onModalClose}>
        <UserInfoForm onUserInfoSubmit={onUserInfoSubmit} />
      </Modal>
      <Modal isOpened={cardInfoModal.isOpened} onClose={cardInfoModal.onModalClose}>
        <CardInfoForm onCardInfoSubmit={onCardInfoSubmit} />
      </Modal>
      <Modal isOpened={orderInfoModal.isOpened} onClose={orderInfoModal.onModalClose}>
        <OrderInfo orderNumber={paymentData?.order.orderNumber || 0} status={paymentStatus} />
      </Modal>
    </section>
  )
}
