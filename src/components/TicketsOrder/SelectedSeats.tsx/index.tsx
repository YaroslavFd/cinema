import React from 'react'

import { Seats } from '../../../store/orderTickets'

import styles from './styles.module.scss'

interface RowSeats {
  row: number
  columns: number[]
}

interface SelectedSeatsProps {
  selectedSeats: Seats[]
}

export const SelectedSeats: React.FC<SelectedSeatsProps> = ({ selectedSeats }) => {
  const groupedSeats: RowSeats[] = []

  selectedSeats.forEach((seat) => {
    const existingRow = groupedSeats.find((rowSeats) => rowSeats.row === seat.row)

    if (existingRow) {
      existingRow.columns.push(seat.column)
    } else {
      groupedSeats.push({ row: seat.row, columns: [seat.column] })
    }
  })

  return (
    <>
      {groupedSeats.map((rowSeats) => (
        <p key={rowSeats.row} className={styles.row}>
          {rowSeats.row} ряд - {rowSeats.columns.join(', ')}
        </p>
      ))}
    </>
  )
}
