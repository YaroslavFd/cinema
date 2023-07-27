import cn from 'classnames'
import React from 'react'
import ReactDOM from 'react-dom'

import styles from './styles.module.scss'

interface FloatingBoxProps {
  children: React.ReactNode
}

const TOTAL_TIME = 8

export const FloatingBox: React.FC<FloatingBoxProps> = ({ children }) => {
  const [isVisible, setIsVisible] = React.useState(true)
  const [isLeaving, setIsLeaving] = React.useState(false)
  const [timeLeft, setTimeLeft] = React.useState(TOTAL_TIME)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1)
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  React.useEffect(() => {
    if (timeLeft <= 0) {
      setIsLeaving(true)
      setTimeout(() => {
        setIsVisible(false)
      }, 1000)
    }
  }, [timeLeft])

  if (!isVisible) return null

  const progress = (timeLeft / TOTAL_TIME) * 100

  return ReactDOM.createPortal(
    <div className={cn(styles.box, isLeaving ? styles.leaving : '')}>
      <div>{children}</div>
      <div className={styles.progressBar}>
        <div className={styles.progressFill} style={{ width: `${progress}%` }} />
      </div>
    </div>,
    document.body
  )
}
