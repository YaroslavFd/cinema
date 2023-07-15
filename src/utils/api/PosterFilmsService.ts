import { FilmScheduleResponce } from '../types/FilmSchedule'
import { GetFilmResponse } from '../types/GetFilmResponce'
import { PosterFilmsResponse } from '../types/PosterFilmsResponse'
import { instance } from './instance'

export const PosterFilmsService = {
  getFilms: async (): Promise<PosterFilmsResponse> => {
    const { data } = await instance.get('/today')

    return data
  },

  getFilm: async (id: string): Promise<GetFilmResponse> => {
    const { data } = await instance.get(`/film/${id}`)

    return data
  },

  getFilmShedule: async (id: string): Promise<FilmScheduleResponce> => {
    const { data } = await instance.get(`/film/${id}/schedule`)

    return data
  }
}
