export const convertHallName = (hallName: string) => {
  if (hallName === 'Red') {
    return 'красный зал'
  } else if (hallName === 'Green') {
    return 'зеленый зал'
  } else if (hallName === 'Blue') {
    return 'синий зал'
  }

  return ''
}

export const convertRatingToRussian = (rating: string) => {
  switch (rating) {
    case 'G':
      return '0+'
    case 'PG':
      return '6+'
    case 'PG13':
      return '12+'
    case 'R':
      return '18+'
    case 'NC17':
      return '18+'
    default:
      return 'Error'
  }
}

export const getReleaseYear = (releaseDate: string) =>
  releaseDate.split(' ')[releaseDate.split(' ').length - 1]

export const formatCardNumber = (value: string) =>
  value
    .replace(/\D/g, '')
    .slice(0, 16)
    .replace(/(\d{4})/g, '$1 ')
    .trim()

export const formatCardTerm = (value: string) =>
  value
    .replace(/\D/g, '')
    .slice(0, 4)
    .replace(/^(\d\d)(\d)/g, '$1/$2')

export const formatCardCvv = (value: string) => value.replace(/\D/g, '').slice(0, 3)

export const isValidPhoneNumber = (value: string) => {
  const phoneRegex =
    /^(8|\+7)?[\s-]?\(?(9|4[0-9]|3[0-9]|2[0-9]|8[0-9]|4[0-9])\)?[\s-]?\d{1,3}[\s-]?\d{2,3}[\s-]?\d{2}[\s-]?\d{2}$/
  return phoneRegex.test(value)
}

export const isValidOtpCode = (value: string) => {
  const otpCodeRegex = /^[0-9]{6}$/i
  return otpCodeRegex.test(value)
}
