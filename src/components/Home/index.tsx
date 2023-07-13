import React from 'react'

import { FilmCard } from '../FilmCard'

import styles from './styles.module.scss'

export const Home: React.FC = () => (
  <div>
    <h1 className={styles.title}>
      АФИША
      <p>
        <span>сегодня</span> в прокате
      </p>
    </h1>

    <div className={styles.content}>
      <FilmCard />
      <FilmCard />
      <FilmCard />
      <FilmCard />
      <FilmCard />
      <FilmCard />
    </div>
  </div>
)
