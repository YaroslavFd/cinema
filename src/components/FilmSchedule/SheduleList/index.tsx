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

  const addInitialTicketInfo = useOrderTicketsStore((state) => state.addInitialTicketInfo)
  const resetChosenSeats = useOrderTicketsStore((state) => state.resetChosenSeats)

  const addSeance = useSeanceStore((state) => state.addSeance)

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

  const renderHallButtons = (hallName: string, btnStyle: string) => {
    const isActiveHall = (item: FilmSeance) =>
      item.time === activeTime.time && item.hall.name === activeTime.name

    const hallSeances = currentSchedule.seances.filter((item) => item.hall.name === hallName)

    return hallSeances.map((item, i) => (
      <button
        key={i}
        type="button"
        onClick={() => activeTimeHandler(item)}
        className={cn(styles.btn, btnStyle, { [styles.active]: isActiveHall(item) })}
      >
        {item.time}
      </button>
    ))
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.halls}>{renderHallButtons('Red', styles.btnRed)}</div>
      <div className={styles.halls}>{renderHallButtons('Blue', styles.btnBlue)}</div>
      <div className={styles.halls}>{renderHallButtons('Green', styles.btnGreen)}</div>
    </div>
  )
}
