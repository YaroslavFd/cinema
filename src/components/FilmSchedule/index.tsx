import cn from 'classnames'
import React from 'react'

import { Film, FilmSchedule as FilmScheduleType } from '../../types'
import { Button } from '../../UI'
import { convertDate } from '../../utils'
import { ScheduleList } from './SheduleList'

import styles from './styles.module.scss'

interface IFilmScheduleProps {
  schedules: FilmScheduleType[]
  film: Film
}

export const FilmSchedule: React.FC<IFilmScheduleProps> = ({ schedules, film }) => {
  const [activeDateIndex, setActiveDateIndex] = React.useState(0)

  const changeActiveDate = (index: number) => {
    setActiveDateIndex(index)
  }

  return (
    <div className={styles.wrapper}>
      <h3>Расписание</h3>

      <div className={styles.dates}>
        {schedules.map((item, i) => (
          <Button
            onClick={() => changeActiveDate(i)}
            className={cn(styles.btn, activeDateIndex === i ? styles.active : '')}
            appearance="accent-dull"
            key={item.date}
          >
            {convertDate(item.date)}
          </Button>
        ))}
      </div>
      <ScheduleList currentSchedule={schedules[activeDateIndex]} film={film} />
    </div>
  )
}
