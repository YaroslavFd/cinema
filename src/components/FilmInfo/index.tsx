import React from 'react'

import { FilmRating } from '../../UI/FilmRating'
import { convertRatingToRussian } from '../../utils/convertRatingToRussian'
import { getReleaseYear } from '../../utils/getReleaseYear'
import { Film } from '../../utils/types/Film'
import { Description } from './Description'
import { Directors } from './Directors'

import styles from './styles.module.scss'

interface IFilmInfoProps {
  film: Film
}

export const FilmInfo: React.FC<IFilmInfoProps> = ({ film }) => {
  const { name, ageRating, img, genres, country, releaseDate, userRatings, description, directors } =
    film

  return (
    <div className={styles.wrapper}>
      <div className={styles.boxImg}>
        <div
          className={styles.img}
          style={{
            backgroundImage: `url('https://shift-backend.onrender.com${img}')`
          }}
        ></div>
        <div className={styles.date}>
          <span>в прокате</span> с 1 июня по 14 июня
        </div>
      </div>
      <div className={styles.boxInfo}>
        <h2 className={styles.title}>
          {name}{' '}
          {convertRatingToRussian(ageRating) !== 'Error' && `(${convertRatingToRussian(ageRating)})`}
        </h2>
        <Directors directors={directors} />
        <span className={styles.smallInfo}>
          {genres.join(', ')}, {!!country && `${country.name}, `} {getReleaseYear(releaseDate)}{' '}
        </span>
        <FilmRating className={styles.rating} rating={userRatings.kinopoisk}>
          Kinopoisk
        </FilmRating>
        <div className={styles.mobileBoxImg}>
          <div
            className={styles.mobileImg}
            style={{
              backgroundImage: `url('https://shift-backend.onrender.com${img}')`
            }}
          ></div>
          <div className={styles.date}>
            <span>в прокате</span> с 1 июня по 14 июня
          </div>
        </div>
        <Description text={description} />
      </div>
    </div>
  )
}
