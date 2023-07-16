import React from 'react'

import { Button } from '../../UI/Button'

import styles from './styles.module.scss'

export const TicketsOrder = () => {
  return (
    <div className={styles.wrapper}>
      <h3>Красный зал</h3>
      <ul className={styles.infoList}>
        <li className={styles.infoItem}>
          <h4>Фильм</h4>
          <p>Уикенд с батей (16+) </p>
        </li>
        <li className={styles.infoItem}>
          <h4>Дата и время:</h4>
          <p>3 июля 13:45</p>
        </li>
        <li className={styles.infoItem}>
          <h4>Места:</h4>
          <p>2 ряд - 8, 9</p>
        </li>
      </ul>
      <div className={styles.payment}>
        <h4>
          Сумма: <span>500руб</span>
        </h4>
        <Button isIcon>Купить</Button>
      </div>
    </div>
  )
}
