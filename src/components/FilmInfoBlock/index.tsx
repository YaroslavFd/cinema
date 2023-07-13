import React from 'react'

import { FilmRating } from '../../UI/FilmRating'
import { Description } from './Description'

import styles from './styles.module.scss'

export const FilmInfoBlock: React.FC = () => {
  const test = 123
  return (
    <div className={styles.wrapper}>
      <div>
        <div
          className={styles.boxImg}
          style={{
            backgroundImage: 'url("https://poster4.me/wp-content/uploads/2020/01/strazhi_.jpg")'
          }}
        ></div>
        <div className={styles.date}>
          <span>в прокате</span> с 1 июня по 14 июня
        </div>
      </div>
      <div>
        <h2 className={styles.title}>Уикенд с батей (16+) </h2>
        <div className={styles.director}>режиссер: Лора Террузо</div>
        <span className={styles.smallInfo}>комедия, США, 2023</span>
        <FilmRating className={styles.rating} rating={7.5} />
        <Description />
      </div>
    </div>
  )
}
