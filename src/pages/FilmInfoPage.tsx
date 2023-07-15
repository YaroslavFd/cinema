import React from 'react'

import { FilmInfo } from '../components/FilmInfo'
import { FilmSchedule } from '../components/FilmSchedule'

export const FilmInfoPage: React.FC = () => (
  <section className="section film-info-section">
    <FilmInfo />
    <FilmSchedule />
  </section>
)
