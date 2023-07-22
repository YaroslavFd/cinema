import React from 'react'

import styles from './styles.module.scss'

interface IDirectorsProps {
  directors: [
    {
      id: string
      professions: 'ACTOR' | 'DIRECTOR'
      fullName: string
    }
  ]
}

export const Directors: React.FC<IDirectorsProps> = ({ directors }) => (
  <div className={styles.directors}>
    Режиссер{directors.length > 1 ? 'ы' : ''}:{' '}
    {directors.map(
      (director, index) => `${director.fullName}${index !== directors.length - 1 ? ', ' : ''}`
    )}
  </div>
)
