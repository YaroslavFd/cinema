import React from 'react'

import styles from './styles.module.scss'

interface IRowNumbersProps {
  quantity: number | undefined
}

export const RowNumbers: React.FC<IRowNumbersProps> = ({ quantity }) => (
  <div className={styles.wrapper}>
    {quantity &&
      Array.from({ length: quantity }, (_, index) => <span key={index + 1}>{index + 1}</span>)}
  </div>
)
