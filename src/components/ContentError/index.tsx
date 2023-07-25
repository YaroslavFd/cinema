import React from 'react'

import styles from './styles.module.scss'

export const ContentError: React.FC = () => (
  <div className={styles.wrapper}>
    <h2>Произошла ошибка 😕</h2>
    <p>Кажется что-то пошло не&nbsp;так! Попробуйте повторить попытку позже.</p>
  </div>
)
