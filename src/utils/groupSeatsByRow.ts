import { Seat } from '../store/orderTickets'

interface RowSeats {
  row: number
  columns: number[]
}

export const groupSeatsByRow = (selectedSeats: Seat[]) => {
  const groupedSeats: RowSeats[] = []

  selectedSeats.forEach((seat) => {
    const existingRow = groupedSeats.find((rowSeats) => rowSeats.row === seat.row)

    if (existingRow) {
      existingRow.columns.push(seat.column)
    } else {
      groupedSeats.push({ row: seat.row, columns: [seat.column] })
    }
  })

  return groupedSeats
}
