import cn from 'classnames'
import React from 'react'
import { createPortal } from 'react-dom'

import { useTimedBox } from '../../hooks/useTimedBox'

import styles from './styles.module.scss'

interface FloatingBoxProps {
  children: React.ReactNode
}

export const FloatingBox: React.FC<FloatingBoxProps> = ({ children }) => {
  const { isVisible, isLeaving, progress } = useTimedBox()

  if (!isVisible) return null

  return createPortal(
    <div className={cn(styles.box, isLeaving ? styles.leaving : '')}>
      <div>{children}</div>
      <div className={styles.progressBar}>
        <div className={styles.progressFill} style={{ width: `${progress}%` }} />
      </div>
    </div>,
    document.body
  )
}
