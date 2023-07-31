import cn from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'

import { useDropdown } from '../../../../hooks/useDropdown'

import { ReactComponent as ProfileUserSvg } from '../../../../assets/profile-user.svg'
import styles from './styles.module.scss'

export const ProfileButton: React.FC = () => {
  const { isOpen, onToggleIsOpen, dropdownBoxRef } = useDropdown()

  return (
    <div ref={dropdownBoxRef} className={styles.box}>
      <button className={cn(styles.btn, isOpen ? styles.btnActive : '')} onClick={onToggleIsOpen}>
        <ProfileUserSvg />
      </button>
      <ul className={cn(styles.dropdown, isOpen ? styles.dropdownActive : '')}>
        <li>
          <Link to="/profile" onClick={onToggleIsOpen}>
            Профиль
          </Link>
        </li>
        <li>
          <Link to="/poster" onClick={onToggleIsOpen}>
            Список фильмов
          </Link>
        </li>
        <li>
          <Link to="/auth" onClick={onToggleIsOpen}>
            Выйти
          </Link>
        </li>
      </ul>
    </div>
  )
}
