import cn from 'classnames'
import React from 'react'

import { renderStars } from '../../utils/renderStars'

import styles from './styles.module.scss'

interface IFilmRatingProps {
  className?: string
  rating: string
  company?: 'Kinopoisk' | 'imdb'
}

export const FilmRating: React.FC<IFilmRatingProps> = ({
  className = '',
  rating,
  company = 'Kinopoisk'
}) => (
  <div className={cn(styles.rating, className)}>
    <div className={styles.stars}>{renderStars(rating)}</div>
    <p>
      {company} - {rating}
    </p>
  </div>
)
