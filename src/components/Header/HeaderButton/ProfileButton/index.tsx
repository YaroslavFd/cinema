import cn from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as ProfileUserSvg } from '../../../../assets/profile-user.svg'
import styles from './styles.module.scss'

export const ProfileButton: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const dropdownBoxRef = React.useRef<HTMLDivElement>(null)

  const onToggleIsOpen = () => {
    setIsOpen((prev) => !prev)
  }

  React.useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (dropdownBoxRef.current && !dropdownBoxRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

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
