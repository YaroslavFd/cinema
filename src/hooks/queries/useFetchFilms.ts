import { useQuery, UseQueryOptions } from '@tanstack/react-query'

import { PosterFilmsResponse } from '../../types'
import { PosterFilmsService } from '../../utils/api'

export const useFetchFilms = (options?: UseQueryOptions<PosterFilmsResponse>) =>
  useQuery<PosterFilmsResponse>(['films'], () => PosterFilmsService.getFilms(), options)
