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
