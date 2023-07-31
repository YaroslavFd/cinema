import React from 'react'

import { InitialTicketInfo, useOrderTicketsStore } from '../../store/orderTickets'
import { Button } from '../../UI/Button'
import { convertHallName } from '../../utils/helpers'
import { InfoList } from './InfoList'

import styles from './styles.module.scss'

interface ITicketsOrderProps {
  ticketInfo: InitialTicketInfo
  onBuyButtonClick: () => void
}

export const TicketsOrder: React.FC<ITicketsOrderProps> = ({ ticketInfo, onBuyButtonClick }) => {
  const price = useOrderTicketsStore((state) => state.price)
  const hallName = convertHallName(ticketInfo.hallName)

  return (
    <div className={styles.wrapper}>
      <h3>{hallName}</h3>
      <InfoList ticketInfo={ticketInfo} />
      <div className={styles.payment}>
        <h4>
          Сумма: <span>{price}руб</span>
        </h4>
        <Button onClick={onBuyButtonClick} disabled={price ? false : true} isIcon>
          Купить
        </Button>
      </div>
    </div>
  )
}
