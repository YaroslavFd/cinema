import React from 'react'

import { Spinner } from '../../UI'

import styles from './styles.module.scss'

export const PendingOrderInfo: React.FC = () => (
  <div className={styles.wrapper}>
    <h3>Обработка платежа</h3>
    <div className={styles.loading}>
      <Spinner />
    </div>
    <p className={styles.infoMessage}>
      Пожалуйста, подождите немного. Мы&nbsp;обрабатываем ваш платеж. Это может занять некоторое время.
    </p>
  </div>
)
