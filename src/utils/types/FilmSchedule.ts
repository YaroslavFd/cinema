export interface FilmSeanceHall {
  name: string
  places: string[]
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
