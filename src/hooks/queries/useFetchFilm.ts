import { useQuery, UseQueryOptions } from '@tanstack/react-query'

import { GetFilmResponse } from '../../types'
import { PosterFilmsService } from '../../utils/api'

export const useFetchFilm = (id: string, options?: UseQueryOptions<GetFilmResponse>) =>
  useQuery<GetFilmResponse>(['film', { id }], () => PosterFilmsService.getFilm(id), options)
