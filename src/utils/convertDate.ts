const weekdays = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']
const months = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря'
]

export const convertDate = (inputDate: string) => {
  const [day, month, year] = inputDate.split('.')

  const date = new Date(Number(`20${year}`), Number(month) - 1, Number(day))
  const weekday = weekdays[date.getDay()]
  const formattedMonth = months[date.getMonth()]

  return `${weekday}, ${day} ${formattedMonth}`
}
