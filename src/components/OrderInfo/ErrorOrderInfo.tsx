import React from 'react'

import errorIcom from '../../assets/error-icon.svg'
import styles from './styles.module.scss'

export const ErrorOrderInfo: React.FC = () => (
  <div className={styles.wrapper}>
    <h3>Ошибка при оплате</h3>
    <img src={errorIcom} alt="error icon" />
    <p className={styles.infoMessage}>
      К сожалению, произошла ошибка при обработке вашего платежа. Пожалуйста, проверьте введенные данные
      карты и попробуйте еще раз.
    </p>
  </div>
)
