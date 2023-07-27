import cn from 'classnames'
import React from 'react'

import styles from './styles.module.scss'

interface InputProps<T> {
  className?: string
  labelText?: string
  error?: string
  type?: string
  name?: string
  placeholder?: string
  required?: boolean
  onChange?: (value: string) => void
  value?: string
  disabled?: boolean
  validation?: T
}

export const Input = <T,>({
  className = '',
  labelText = '',
  error = '',
  name = '',
  type = 'text',
  placeholder = '',
  required = false,
  onChange,
  value,
  disabled,
  validation
}: InputProps<T>) => {
  const inputId = React.useId()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value
    if (onChange) {
      onChange(newValue)
    }
  }

  return (
    <label className={cn(styles.label, styles[className], error ? styles.error : '')} htmlFor={inputId}>
      <span>
        {labelText}
        {required ? '*' : null}
      </span>
      <input
        className={styles.inputClass}
        value={value}
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        id={inputId}
        disabled={disabled}
        {...validation}
        onChange={handleChange}
      />
      {error && <span className={styles.errorMessage}>{error}</span>}
    </label>
  )
}
