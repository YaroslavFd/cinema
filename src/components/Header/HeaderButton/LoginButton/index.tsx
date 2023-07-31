import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Button } from '../../../../UI'

import styles from './styles.module.scss'

export const LoginButton: React.FC = () => {
  const navigate = useNavigate()

  const onButtonClick = () => {
    navigate('/auth')
  }

  return (
    <Button className={styles.btn} appearance="outline" onClick={onButtonClick}>
      Войти
    </Button>
  )
}
