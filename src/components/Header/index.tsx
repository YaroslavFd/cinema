import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { Button } from '../../UI/Button'

import logo from '../../assets/logo.png'
import styles from './styles.module.scss'

export const Header: React.FC = () => {
  const navigate = useNavigate()

  const onButtonClick = () => {
    navigate('/auth')
  }

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <Button appearance="outline" onClick={onButtonClick}>
          Войти
        </Button>
      </div>
    </header>
  )
}
