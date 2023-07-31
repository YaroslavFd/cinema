import cn from 'classnames'
import React from 'react'

import { ReactComponent as TicketIcon } from '../../assets/ticket-icon.svg'
import styles from './styles.module.scss'

interface IButtonProps {
  className?: string
  type?: 'button' | 'submit'
  appearance?: string
  onClick?: () => void
  disabled?: boolean
  isIcon?: boolean
  children?: React.ReactNode
}

export const Button: React.FC<IButtonProps> = ({
  type = 'button',
  className = '',
  appearance = 'accent',
  onClick,
  isIcon = false,
  disabled = false,
  children
}) => (
  <button
    className={cn(styles.button, className, disabled ? styles.disabled : '', {
      [styles.accent]: appearance === 'accent',
      [styles.accentDull]: appearance === 'accent-dull',
      [styles.outline]: appearance === 'outline'
    })}
    type={type}
    onClick={onClick}
    disabled={disabled}
  >
    {children} {isIcon && <TicketIcon />}
  </button>
)
