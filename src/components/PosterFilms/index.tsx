import React from 'react'

import { useFetchFilms } from '../../hooks/queries'
import { ContentError } from '../ContentError'
import { FilmCard } from '../FilmCard'
import { Skeleton } from '../FilmCard/Skeleton'

import styles from './styles.module.scss'

export const PosterFilms: React.FC = () => {
  const { data, isLoading, isError } = useFetchFilms()

  if (isError) {
    return <ContentError />
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
        {isLoading
          ? [...new Array(8)].map((_, i) => <Skeleton key={i} />)
          : data?.films.map((film) => <FilmCard key={film.id} film={film} />)}
      </div>
    </div>
  )
}
