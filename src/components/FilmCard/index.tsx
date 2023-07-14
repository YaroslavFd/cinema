import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Button } from '../../UI/Button'
import { FilmRating } from '../../UI/FilmRating'
import { convertRatingToRussian } from '../../utils/convertRatingToRussian'
import { getReleaseYear } from '../../utils/getReleaseYear'
import { Film } from '../../utils/types/Film'

import styles from './styles.module.scss'

interface IFilmCardProps {
  film: Film
}

export const FilmCard: React.FC<IFilmCardProps> = ({ film }) => {
  const { id, genres, country, releaseDate, img, name, originalName, userRatings, ageRating } = film

  const navigate = useNavigate()

  const onMoreInfoClick = () => {
    navigate(`/poster/${id}`)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.boxInfo}>
        <span>{genres[0]}</span>
        {!!country && `${country.name}, `} {getReleaseYear(releaseDate)}
      </div>
      <div
        className={styles.boxImg}
        style={{ backgroundImage: `url('https://shift-backend.onrender.com${img}')` }}
      >
        {convertRatingToRussian(ageRating) !== 'Error' && (
          <div className={styles.ageRating}>{convertRatingToRussian(ageRating)}</div>
        )}
      </div>
      <h2 className={styles.title}>
        <p>{name}</p>
        <span>{originalName}</span>
      </h2>
      <FilmRating rating={userRatings.kinopoisk} />
      <Button className={styles.btn} onClick={onMoreInfoClick}>
        Подробнее
      </Button>
    </div>
  )
}
