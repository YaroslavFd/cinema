import cn from 'classnames'
import React from 'react'

import { renderStars } from '../../utils/renderStars'

import styles from './styles.module.scss'

interface IFilmRatingProps {
  className?: string
  rating: string
  children: React.ReactNode
}

export const FilmRating: React.FC<IFilmRatingProps> = ({
  className = '',
  rating,
  children
}) => (
  <div className={cn(styles.rating, className)}>
    <div className={styles.stars}>{renderStars(rating)}</div>
    <p>
      {children} - {rating}
    </p>
  </div>
)
