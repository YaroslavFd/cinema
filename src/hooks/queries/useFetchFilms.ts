import { useQuery, UseQueryOptions } from '@tanstack/react-query'

import { PosterFilmsService } from '../../utils/api/PosterFilmsService'
import { PosterFilmsResponse } from '../../utils/types/PosterFilmsResponse'

export const useFetchFilms = (options?: UseQueryOptions<PosterFilmsResponse>) =>
  useQuery<PosterFilmsResponse>(['films'], () => PosterFilmsService.getFilms(), options)
