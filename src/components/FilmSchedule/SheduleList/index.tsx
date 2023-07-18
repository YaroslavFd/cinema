import cn from 'classnames'
import React from 'react'

import { useOrderTicketsStore } from '../../../store/orderTickets'
import { useSeanceStore } from '../../../store/seance'
import { Film } from '../../../utils/types/Film'
import { FilmSchedule, FilmSeance } from '../../../utils/types/FilmSchedule'

import styles from './styles.module.scss'

interface IScheduleListProps {
  currentSchedule: FilmSchedule
  film: Film
}

type activeTimeType = {
  time: string | null
  name: string | null
}

export const ScheduleList: React.FC<IScheduleListProps> = ({ currentSchedule, film }) => {
  const [activeTime, setActiveTime] = React.useState<activeTimeType>({
    time: null,
    name: null
  })

  const addSeance = useSeanceStore((state) => state.addSeance)

  const addInitialTicketInfo = useOrderTicketsStore((state) => state.addInitialTicketInfo)
  const resetChosenSeats = useOrderTicketsStore((state) => state.resetChosenSeats)

  const activeTimeHandler = (item: FilmSeance) => {
    addSeance(item)
    addInitialTicketInfo({
      id: film.id,
      ageRating: film.ageRating,
      date: currentSchedule.date,
      time: item.time,
      hallName: item.hall.name,
      title: film.name
    })
    setActiveTime({ time: item.time, name: item.hall.name })
    resetChosenSeats()
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.halls}>
        {currentSchedule.seances.map((item, i) => {
          const activeStyle =
            item.time === activeTime.time && item.hall.name === activeTime.name ? styles.active : null
          if (item.hall.name === 'Red')
            return (
              <button
                onClick={() => activeTimeHandler(item)}
                className={cn(styles.btn, styles.btnRed, activeStyle)}
                key={i}
                type="button"
              >
                {item.time}
              </button>
            )
        })}
      </div>

      <div className={styles.halls}>
        {currentSchedule.seances.map((item, i) => {
          const activeStyle =
            item.time === activeTime.time && item.hall.name === activeTime.name ? styles.active : null
          if (item.hall.name === 'Blue')
            return (
              <button
                onClick={() => activeTimeHandler(item)}
                className={cn(styles.btn, styles.btnBlue, activeStyle)}
                key={i}
                type="button"
              >
                {item.time}
              </button>
            )
        })}
      </div>

      <div className={styles.halls}>
        {currentSchedule.seances.map((item, i) => {
          const activeStyle =
            item.time === activeTime.time && item.hall.name === activeTime.name ? styles.active : null
          if (item.hall.name === 'Green')
            return (
              <button
                onClick={() => activeTimeHandler(item)}
                className={cn(styles.btn, styles.btnGreen, activeStyle)}
                key={i}
                type="button"
              >
                {item.time}
              </button>
            )
        })}
      </div>
    </div>
  )
}
