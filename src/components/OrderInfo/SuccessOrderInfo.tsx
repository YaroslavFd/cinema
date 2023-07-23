import React from 'react'

import { InitialTicketInfo } from '../../store/orderTickets'
import { InfoList } from '../TicketsOrder/InfoList'

import successIcon from '../../assets/success-icon.svg'
import styles from './styles.module.scss'

interface SuccessOrderInfoProps {
  ticketInfo: InitialTicketInfo
  orderNumber: number
}

export const SuccessOrderInfo: React.FC<SuccessOrderInfoProps> = ({ ticketInfo, orderNumber }) => {
  return (
    <div className={styles.wrapper}>
      <h3>Оплата прошла успешно!</h3>
      <img src={successIcon} alt="success icon" />
      <div className={styles.code}>
        Код билета
        <span>{orderNumber}</span>
      </div>
      <InfoList ticketInfo={ticketInfo} />
      <div className={styles.bottomInfo}>вся информация была продублирована в SMS</div>
    </div>
  )
}
