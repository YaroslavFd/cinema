import React from 'react'

import { Button } from '../../../UI/Button'

import styles from './styles.module.scss'

interface TwoStepActionButtonsProps {
  isFirst: boolean
  timesUp: boolean
  time: number
  isValid: boolean
  isLoading: boolean
  onCodeRequestClick: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export const TwoStepActionButtons: React.FC<TwoStepActionButtonsProps> = ({
  isFirst,
  timesUp,
  time,
  isValid,
  isLoading,
  onCodeRequestClick
}) => (
  <div className={styles.btns}>
    {!isFirst && (
      <>
        {!timesUp && <div className={styles.info}>Запросить код повторно можно через {time} секунд</div>}
        <Button
          appearance="outline"
          onClick={onCodeRequestClick}
          disabled={!timesUp}
          className={!timesUp ? styles.disabled : null}
        >
          Запросить код
        </Button>
      </>
    )}
    <Button disabled={(isFirst && !isValid) || isLoading} type="submit">
      Продолжить
    </Button>
  </div>
)
