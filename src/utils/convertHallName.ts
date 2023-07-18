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
