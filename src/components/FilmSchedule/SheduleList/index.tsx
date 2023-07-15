import cn from 'classnames'
import React from 'react'

import { FilmSchedule } from '../../../utils/types/FilmSchedule'

import styles from './styles.module.scss'

interface IScheduleListProps {
  currentSchedule: FilmSchedule
}

type activeTimeType = {
  time: string | null
  name: string | null
}

export const ScheduleList: React.FC<IScheduleListProps> = ({ currentSchedule }) => {
  const [activeTime, setActiveTime] = React.useState<activeTimeType>({
    time: null,
    name: null
  })

  const activeTimeHandler = (time: string, name: string) => {
    setActiveTime({ time, name })
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
                onClick={() => activeTimeHandler(item.time, item.hall.name)}
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
                onClick={() => activeTimeHandler(item.time, item.hall.name)}
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
                onClick={() => activeTimeHandler(item.time, item.hall.name)}
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
