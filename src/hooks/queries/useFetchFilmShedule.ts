import { useQuery, UseQueryOptions } from '@tanstack/react-query'

import { PosterFilmsService } from '../../utils/api/PosterFilmsService'
import { FilmScheduleResponce } from '../../utils/types/FilmSchedule'

export const useFetchFilmShedule = (id: string, options?: UseQueryOptions<FilmScheduleResponce>) =>
  useQuery<FilmScheduleResponce>(
    ['schedule', { id }],
    () => PosterFilmsService.getFilmShedule(id),
    options
  )
