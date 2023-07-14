import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useParams } from 'react-router-dom'

import { PosterFilmsService } from '../../utils/api/PosterFilmsService'
import { FilmInfoComponent } from './FilmInfoComponent'

export const FilmInfo: React.FC = () => {
  const { id } = useParams()

  if (!Number(id)) {
    return <div>Error</div>
  }

  const { data, isLoading, isError } = useQuery({
    queryKey: ['film'],
    queryFn: () => PosterFilmsService.getFilm(String(id))
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error</div>
  }

  return <FilmInfoComponent film={data.film} />
}
