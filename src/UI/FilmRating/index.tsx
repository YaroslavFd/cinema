import cn from 'classnames'
import React from 'react'

import { Star } from '../Star'

import styles from './styles.module.scss'

interface IFilmRatingProps {
  className?: string
  rating: number
}

export const FilmRating: React.FC<IFilmRatingProps> = ({ className = '', rating }) => (
  <div className={cn(styles.rating, className)}>
    <div className={styles.stars}>
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </div>
    <p>Kinopoisk - {rating}</p>
  </div>
)
