import React from 'react'

import errorIcom from '../../assets/error-icon.svg'
import styles from './styles.module.scss'

export const ErrorOrderInfo: React.FC = () => (
  <div className={styles.wrapper}>
    <h3>Ошибка при оплате</h3>
    <img src={errorIcom} alt="error icon" />
    <p className={styles.infoMessage}>
      К&nbsp;сожалению, произошла ошибка при обработке вашего платежа, или данные билеты уже были
      куплены.
    </p>
  </div>
)
