import React from 'react'

import { Button } from '../../UI/Button'

import logo from '../../assets/logo.png'
import styles from './styles.module.scss'

export const Header: React.FC = () => (
  <header className={styles.header}>
    <div className={styles.wrapper}>
      <a href="#">
        <img src={logo} alt="logo" />
      </a>
      <Button appearance="outline">Войти</Button>
    </div>
  </header>
)
