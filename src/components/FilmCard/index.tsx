import React from 'react'

import { Button } from '../../UI/Button'
import { FilmRating } from '../../UI/FilmRating'

import styles from './styles.module.scss'

export const FilmCard: React.FC = () => (
  <div className={styles.wrapper}>
    <div className={styles.boxInfo}>
      <span>фантастика</span>
      США, 2023
    </div>
    <div
      className={styles.boxImg}
      style={{ backgroundImage: 'url("https://poster4.me/wp-content/uploads/2020/01/strazhi_.jpg")' }}
    >
      <div className={styles.ageRating}>16+</div>
    </div>
    <h2 className={styles.title}>
      <p>Стражи галактики 3</p>
      <span>Guardians of the Galaxy Vol. 3</span>
    </h2>
    <FilmRating rating={8.6} />
    <Button className={styles.btn}>Подробнее</Button>
  </div>
)
