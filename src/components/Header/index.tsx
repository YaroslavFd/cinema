import React from 'react'
import { Link } from 'react-router-dom'

import { Button } from '../../UI/Button'

import logo from '../../assets/logo.png'
import styles from './styles.module.scss'

export const Header: React.FC = () => (
  <header className={styles.header}>
    <div className={styles.wrapper}>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <Button appearance="outline">Войти</Button>
    </div>
  </header>
)
