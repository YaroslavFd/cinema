import React from 'react'

import { TicketsOrder } from '../TicketsOrder'
import { ChoiceSeats } from './ChoiceSeats'

import styles from './styles.module.scss'

export const ChoiceFilmTickets: React.FC = () => (
  <div className={styles.wrapper}>
    <ChoiceSeats />
    <TicketsOrder />
  </div>
)
