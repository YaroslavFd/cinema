import cn from 'classnames'
import React from 'react'

import { FilmSeancePlace } from '../../../../utils/types/FilmSchedule'

import styles from './styles.module.scss'

export const Seat: React.FC<FilmSeancePlace> = ({ price, type }) => {
  let seatType = styles.comfort

  switch (type) {
    case 'COMFORT':
      seatType = styles.comfort
      break
    case 'BLOCKED':
      seatType = styles.taken
      break
    default:
      seatType = ''
      break
  }
  return <div className={cn(styles.seat, seatType)}></div>
}
