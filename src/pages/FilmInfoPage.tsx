import { useQueries } from '@tanstack/react-query'
import React from 'react'
import { useParams } from 'react-router-dom'

import { ChoiceFilmTickets } from '../components/ChoiceFilmTickets'
import { FilmInfo } from '../components/FilmInfo'
import { FilmSchedule } from '../components/FilmSchedule'
import { PosterFilmsService } from '../utils/api/PosterFilmsService'

export const FilmInfoPage: React.FC = () => {
  const { id } = useParams()

  if (!Number(id)) {
    return <div>Error</div>
  }

  const queries = useQueries({
    queries: [
      {
        queryKey: ['film'],
        queryFn: () => PosterFilmsService.getFilm(String(id))
      },
      {
        queryKey: ['schedule'],
        queryFn: () => PosterFilmsService.getFilmShedule(String(id))
      }
    ]
  })

  const filmQuery = queries[0]
  const scheduleQuery = queries[1]

  const filmData = filmQuery.data
  const scheduleData = scheduleQuery.data
  const isLoading = filmQuery.isLoading || scheduleQuery.isLoading
  const isError = filmQuery.isError || scheduleQuery.isError

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error</div>
  }

  return (
    <section className="section film-info-section">
      {filmData && <FilmInfo film={filmData.film} />}
      {scheduleData && filmData && (
        <FilmSchedule schedules={scheduleData.schedules} film={filmData.film} />
      )}
      <ChoiceFilmTickets />
    </section>
  )
}
