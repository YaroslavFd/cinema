import React from 'react'
import { useParams } from 'react-router-dom'

import { CardInfoForm } from '../components/CardInfoForm'
import { ChoiceFilmTickets } from '../components/ChoiceFilmTickets'
import { ContentError } from '../components/ContentError'
import { FilmInfo } from '../components/FilmInfo'
import { FilmSchedule } from '../components/FilmSchedule'
import { Modal } from '../components/Modal'
import { OrderInfo } from '../components/OrderInfo'
import { UserInfoForm } from '../components/UserInfoForm'
import { useFetchFilm } from '../hooks/queries/useFetchFilm'
import { useFetchFilmShedule } from '../hooks/queries/useFetchFilmShedule'
import { useOrderFilm } from '../hooks/useOrderFilm'
import { Spinner } from '../UI/Spinner'

export const FilmInfoPage: React.FC = () => {
  const {
    onBuyButtonClick,
    onUserInfoSubmit,
    onCardInfoSubmit,
    closeOrderInfoModal,
    userInfoModal,
    cardInfoModal,
    orderInfoModal,
    paymentMutation
  } = useOrderFilm()

  const { id } = useParams()

  const { data: filmData, isLoading: filmIsLoading, isError: filmIsError } = useFetchFilm(String(id))
  const {
    data: scheduleData,
    isLoading: scheduleIsLoading,
    isError: scheduleIsError
  } = useFetchFilmShedule(String(id))

  if (filmIsLoading || scheduleIsLoading) {
    return <Spinner width={250} height={250} />
  }

  if (filmIsError || scheduleIsError) {
    return <ContentError />
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

      <Modal isOpened={orderInfoModal.isOpened} onClose={closeOrderInfoModal}>
        <OrderInfo
          orderNumber={paymentMutation.data?.order.orderNumber || 0}
          status={paymentMutation.status}
        />
      </Modal>
    </section>
  )
}
