import cn from 'classnames'
import React from 'react'

import styles from './styles.module.scss'

const SEAT_STYLES = {
  seat: styles.seat,
  taken: styles.taken,
  bought: styles.bought,
  comfort: styles.comfort,
  chosen: styles.chosen
}

export const SeatsInformation: React.FC = () => (
  <div className={styles.wrapper}>
    <div className={styles.seatBox}>
      <div className={SEAT_STYLES.seat}></div>
      <h3>Эконом</h3>
    </div>
    <div className={styles.seatBox}>
      <div className={cn(SEAT_STYLES.seat, SEAT_STYLES.taken)}></div>
      <h3>Занятно</h3>
    </div>
    <div className={styles.seatBox}>
      <div className={cn(SEAT_STYLES.seat, SEAT_STYLES.bought)}></div>
      <h3>Куплено Вами</h3>
    </div>
    <div className={styles.seatBox}>
      <div className={cn(SEAT_STYLES.seat, SEAT_STYLES.comfort)}></div>
      <h3>Комфорт</h3>
    </div>
    <div className={styles.seatBox}>
      <div className={cn(SEAT_STYLES.seat, SEAT_STYLES.chosen)}></div>
      <h3>Выбрано</h3>
    </div>
  </div>
)
