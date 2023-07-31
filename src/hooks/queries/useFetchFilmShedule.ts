import { useQuery, UseQueryOptions } from '@tanstack/react-query'

import { FilmScheduleResponce } from '../../types'
import { PosterFilmsService } from '../../utils/api'

export const useFetchFilmShedule = (id: string, options?: UseQueryOptions<FilmScheduleResponce>) =>
  useQuery<FilmScheduleResponce>(
    ['schedule', { id }],
    () => PosterFilmsService.getFilmShedule(id),
    options
  )
