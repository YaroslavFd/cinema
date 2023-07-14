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
