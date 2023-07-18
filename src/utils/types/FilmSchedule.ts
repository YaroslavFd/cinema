export type SeancePlaceType = 'COMFORT' | 'ECONOM' | 'BLOCKED'
export type SeanceHallNameType =  'Red' | 'Green' | 'Blue'

export interface FilmSeancePlace {
  price: number
  type: SeancePlaceType
}

export interface FilmSeanceHall {
  name: SeanceHallNameType
  places: FilmSeancePlace[][]
}

export interface FilmSeanceTime {
  date: string
  time: string
}

export interface FilmTicket {
  filmId: string
  row: number
  column: number
  seance: FilmSeanceTime
  phone: string
}

export interface FilmSeance {
  time: string
  hall: FilmSeanceHall
  payedTickets: FilmTicket[]
}

export interface FilmSchedule {
  date: string
  seances: FilmSeance[]
}

export interface FilmScheduleResponce {
  success: boolean
  schedules: FilmSchedule[]
}
