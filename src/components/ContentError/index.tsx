import React from 'react'

import styles from './styles.module.scss'

interface ContentErrorProps {
  isSmall?: boolean
}

export const ContentError: React.FC<ContentErrorProps> = ({ isSmall }) => (
  <div className={styles.wrapper}>
    <h2 className={isSmall ? styles.smTitle : ''}>Произошла ошибка 😕</h2>
    <p>Кажется что-то пошло не&nbsp;так! Попробуйте повторить попытку позже.</p>
  </div>
)
