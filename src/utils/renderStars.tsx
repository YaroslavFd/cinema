import { Star } from '../UI/Star'

export const renderStars = (rating: string) => {
  const maxStars = 5
  const maxRating = 10
  const stars = []

  const numFilledStars = Math.round((Number(rating) / maxRating) * maxStars)

  for (let i = 0; i < maxStars; i++) {
    if (i < numFilledStars) {
      stars.push(<Star key={i} />)
    } else {
      stars.push(<Star key={i} isEmpty />)
    }
  }

  return stars
}
