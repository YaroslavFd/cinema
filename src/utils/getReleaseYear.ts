export const getReleaseYear = (releaseDate: string) =>
  releaseDate.split(' ')[releaseDate.split(' ').length - 1]
