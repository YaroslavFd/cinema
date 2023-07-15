import { useQuery } from '@tanstack/react-query'
import React from 'react'

import { PosterFilmsService } from '../../utils/api/PosterFilmsService'
import { FilmCard } from '../FilmCard'

import styles from './styles.module.scss'

export const PosterFilms: React.FC = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['films'],
    queryFn: PosterFilmsService.getFilms
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error</div>
  }

  return (
    <div>
      <h1 className={styles.title}>
        АФИША
        <p>
          <span>сегодня</span> в прокате
        </p>
      </h1>

      <div className={styles.content}>
        {data.films.map((film) => (
          <FilmCard key={film.id} film={film} />
        ))}
      </div>
    </div>
  )
}
