import { useQuery, UseQueryOptions } from '@tanstack/react-query'

import { PosterFilmsService } from '../../utils/api/PosterFilmsService'
import { GetFilmResponse } from '../../utils/types/GetFilmResponce'

export const useFetchFilm = (id: string, options?: UseQueryOptions<GetFilmResponse>) =>
  useQuery<GetFilmResponse>(['film', { id }], () => PosterFilmsService.getFilm(id), options)
