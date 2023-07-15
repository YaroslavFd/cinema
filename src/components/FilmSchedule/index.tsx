import { useQuery } from '@tanstack/react-query'
import cn from 'classnames'
import React from 'react'
import { useParams } from 'react-router-dom'

import { Button } from '../../UI/Button'
import { PosterFilmsService } from '../../utils/api/PosterFilmsService'
import { convertDate } from '../../utils/convertDate'
import { ScheduleList } from './SheduleList'

import styles from './styles.module.scss'

export const FilmSchedule: React.FC = () => {
  const { id } = useParams()

  const [activeDateIndex, setActiveDateIndex] = React.useState(0)

  if (!Number(id)) {
    return <div>Error</div>
  }

  const { data, isLoading, isError } = useQuery({
    queryKey: ['schedule'],
    queryFn: () => PosterFilmsService.getFilmShedule(String(id))
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error</div>
  }

  const changeActiveDate = (index: number) => {
    setActiveDateIndex(index)
  }

  return (
    <div className={styles.wrapper}>
      <h3>Расписание</h3>

      <div className={styles.dates}>
        {data.schedules.map((item, i) => (
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
      <ScheduleList currentSchedule={data.schedules[activeDateIndex]} />
    </div>
  )
}
