import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import { HeaderButton } from './HeaderButton'

import logo from '../../assets/logo.png'
import styles from './styles.module.scss'

export const Header: React.FC = () => {
  const location = useLocation()
  const currentUrl = location.pathname.slice(1)

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Link to="/poster">
          <img src={logo} alt="logo" />
        </Link>

        {currentUrl !== 'auth' && <HeaderButton />}
      </div>
    </header>
  )
}
