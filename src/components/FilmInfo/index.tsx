import React from 'react'

import { FilmRating } from '../../UI/FilmRating'
import { convertRatingToRussian, getReleaseYear } from '../../utils/helpers'
import { Film } from '../../utils/types/Film'
import { BoxImg } from './BoxImg'
import { Description } from './Description'
import { Directors } from './Directors'

import styles from './styles.module.scss'

interface IFilmInfoProps {
  film: Film
}

export const FilmInfo: React.FC<IFilmInfoProps> = ({ film }) => (
  <div className={styles.wrapper}>
    <BoxImg img={film.img} />
    <div className={styles.boxInfo}>
      <h2 className={styles.title}>
        {film.name}{' '}
        {convertRatingToRussian(film.ageRating) !== 'Error' &&
          `(${convertRatingToRussian(film.ageRating)})`}
      </h2>
      <Directors directors={film.directors} />
      <span className={styles.smallInfo}>
        {film.genres.join(', ')}, {!!film.country && `${film.country.name}, `}{' '}
        {getReleaseYear(film.releaseDate)}{' '}
      </span>
      <FilmRating className={styles.rating} rating={film.userRatings.kinopoisk}>
        Kinopoisk
      </FilmRating>
      <BoxImg img={film.img} isMobile />
      <Description text={film.description} />
    </div>
  </div>
)
