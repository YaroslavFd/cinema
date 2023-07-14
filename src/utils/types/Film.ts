export type Film = {
  id: string
  name: string
  originalName: string
  description: string
  releaseDate: string
  actors: [
    {
      id: string
      professions: 'ACTOR' | 'DIRECTOR'
      fullName: string
    }
  ]
  directors: [
    {
      id: string
      professions: 'ACTOR' | 'DIRECTOR'
      fullName: string
    }
  ]
  runtime: number
  ageRating: 'R' | 'NC17' | 'G' | 'PG' | 'PG13'
  genres: Array<string>
  userRatings: {
    kinopoisk: string
    imdb: string
  }
  img: string
  country: {
    name: string
    code: string
    code2: string
    id: number
  }
}
