import cn from 'classnames'
import React from 'react'

import styles from './styles.module.scss'

export const SeatsInformation: React.FC = () => (
  <div className={styles.wrapper}>
    <div className={styles.seatBox}>
      <div className={styles.seat}></div>
      <h3>Эконом</h3>
    </div>
    <div className={styles.seatBox}>
      <div className={cn(styles.seat, styles.taken)}></div>
      <h3>Занятно</h3>
    </div>
    <div className={styles.seatBox}>
      <div className={cn(styles.seat, styles.bought)}></div>
      <h3>Куплено Вами</h3>
    </div>
    <div className={styles.seatBox}>
      <div className={cn(styles.seat, styles.comfort)}></div>
      <h3>Комфорт</h3>
    </div>
    <div className={styles.seatBox}>
      <div className={cn(styles.seat, styles.chosen)}></div>
      <h3>Выбрано</h3>
    </div>
  </div>
)
