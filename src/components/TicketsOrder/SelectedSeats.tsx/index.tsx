import React from 'react'

import { Seat } from '../../../store/orderTickets'
import { groupSeatsByRow } from '../../../utils/groupSeatsByRow'

import styles from './styles.module.scss'

interface SelectedSeatsProps {
  selectedSeats: Seat[]
  isNamedPlace?: boolean
}

export const SelectedSeats: React.FC<SelectedSeatsProps> = ({ selectedSeats, isNamedPlace }) => {
  const groupedSeats = groupSeatsByRow(selectedSeats)

  return (
    <>
      {groupedSeats.map((rowSeats) => (
        <p key={rowSeats.row} className={styles.row}>
          {rowSeats.row} ряд - {rowSeats.columns.join(', ')}{' '}
          {isNamedPlace && (rowSeats.columns.length === 1 ? 'место' : 'места')}
        </p>
      ))}
    </>
  )
}
