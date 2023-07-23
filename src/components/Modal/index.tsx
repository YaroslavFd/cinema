import React from 'react'
import { createPortal } from 'react-dom'

import close from '../../assets/close.svg'
import styles from './styles.module.scss'

interface IModalProps {
  children: React.ReactNode
  isOpened: boolean
  onClose: () => void
}

export const Modal: React.FC<IModalProps> = ({ children, isOpened, onClose }) => {
  if (!isOpened) {
    return null
  }

  return createPortal(
    <div className={styles.wrapper}>
      <div className={styles.overlay} onClick={onClose}></div>
      <div className={styles.content}>
        <img className={styles.close} src={close} onClick={onClose} alt="закрыть" />
        {children}
      </div>
    </div>,
    document.body
  )
}
