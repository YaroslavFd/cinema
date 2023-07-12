import cn from 'classnames'
import React from 'react'

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
  disabled = false,
  isIcon = false,
  children
}) => (
  <button
    className={cn(styles.button, className, {
      [styles.accent]: appearance === 'accent',
      [styles.outline]: appearance === 'outline'
    })}
    type={type}
    onClick={onClick}
    disabled={disabled}
  >
    {children}{' '}
    {isIcon && (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.09998 8.4C2.09998 7.84304 2.32123 7.3089 2.71505 6.91507C3.10888 6.52125 3.64302 6.3 4.19998 6.3H23.8C24.3569 6.3 24.8911 6.52125 25.2849 6.91507C25.6787 7.3089 25.9 7.84304 25.9 8.4V12.096C25.9 12.4726 25.6746 12.81 25.3288 12.9542C25.1226 13.0403 24.9465 13.1855 24.8226 13.3715C24.6988 13.5574 24.6327 13.7759 24.6327 13.9993C24.6327 14.2227 24.6988 14.4412 24.8226 14.6271C24.9465 14.8131 25.1226 14.9583 25.3288 15.0444C25.498 15.1151 25.6426 15.2344 25.7442 15.3871C25.8459 15.5398 25.9001 15.7192 25.9 15.9026V19.6C25.9 20.157 25.6787 20.6911 25.2849 21.0849C24.8911 21.4787 24.3569 21.7 23.8 21.7H4.19998C3.64302 21.7 3.10888 21.4787 2.71505 21.0849C2.32123 20.6911 2.09998 20.157 2.09998 19.6V15.904C2.09998 15.5274 2.32538 15.19 2.67118 15.0444C2.87735 14.9583 3.05345 14.8131 3.17731 14.6271C3.30117 14.4412 3.36726 14.2227 3.36726 13.9993C3.36726 13.7759 3.30117 13.5574 3.17731 13.3715C3.05345 13.1855 2.87735 13.0403 2.67118 12.9542C2.50213 12.8836 2.35773 12.7646 2.2561 12.6121C2.15448 12.4597 2.10016 12.2806 2.09998 12.0974V8.4ZM4.19998 7.7C4.01432 7.7 3.83628 7.77375 3.705 7.90502C3.57373 8.0363 3.49998 8.21435 3.49998 8.4V11.8034C5.19118 12.7596 5.19118 15.2404 3.49998 16.1966V19.6C3.49998 19.7857 3.57373 19.9637 3.705 20.095C3.83628 20.2262 4.01432 20.3 4.19998 20.3H23.8C23.9856 20.3 24.1637 20.2262 24.295 20.095C24.4262 19.9637 24.5 19.7857 24.5 19.6V16.1966C22.8088 15.2404 22.8088 12.7596 24.5 11.8034V8.4C24.5 8.21435 24.4262 8.0363 24.295 7.90502C24.1637 7.77375 23.9856 7.7 23.8 7.7H4.19998Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.5 18.55C17.7784 18.55 18.0455 18.6606 18.2424 18.8575C18.4393 19.0544 18.55 19.3215 18.55 19.6V20.3C18.55 20.5785 18.4393 20.8455 18.2424 21.0425C18.0455 21.2394 17.7784 21.35 17.5 21.35C17.2215 21.35 16.9544 21.2394 16.7575 21.0425C16.5606 20.8455 16.45 20.5785 16.45 20.3V19.6C16.45 19.3215 16.5606 19.0544 16.7575 18.8575C16.9544 18.6606 17.2215 18.55 17.5 18.55ZM17.5 6.65C17.7784 6.65 18.0455 6.76062 18.2424 6.95754C18.4393 7.15445 18.55 7.42152 18.55 7.7V8.4C18.55 8.67847 18.4393 8.94555 18.2424 9.14246C18.0455 9.33937 17.7784 9.45 17.5 9.45C17.2215 9.45 16.9544 9.33937 16.7575 9.14246C16.5606 8.94555 16.45 8.67847 16.45 8.4V7.7C16.45 7.42152 16.5606 7.15445 16.7575 6.95754C16.9544 6.76062 17.2215 6.65 17.5 6.65ZM17.5 10.5C17.7784 10.5 18.0455 10.6106 18.2424 10.8075C18.4393 11.0044 18.55 11.2715 18.55 11.55V12.25C18.55 12.5285 18.4393 12.7955 18.2424 12.9925C18.0455 13.1894 17.7784 13.3 17.5 13.3C17.2215 13.3 16.9544 13.1894 16.7575 12.9925C16.5606 12.7955 16.45 12.5285 16.45 12.25V11.55C16.45 11.2715 16.5606 11.0044 16.7575 10.8075C16.9544 10.6106 17.2215 10.5 17.5 10.5ZM17.5 14.7C17.7784 14.7 18.0455 14.8106 18.2424 15.0075C18.4393 15.2044 18.55 15.4715 18.55 15.75V16.45C18.55 16.7285 18.4393 16.9955 18.2424 17.1925C18.0455 17.3894 17.7784 17.5 17.5 17.5C17.2215 17.5 16.9544 17.3894 16.7575 17.1925C16.5606 16.9955 16.45 16.7285 16.45 16.45V15.75C16.45 15.4715 16.5606 15.2044 16.7575 15.0075C16.9544 14.8106 17.2215 14.7 17.5 14.7Z"
          fill="white"
        />
      </svg>
    )}
  </button>
)
