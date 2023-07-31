import cn from 'classnames'
import React from 'react'

import styles from './styles.module.scss'

interface BoxImgProps {
  isMobile?: boolean
  img: string
}

export const BoxImg: React.FC<BoxImgProps> = ({ isMobile = false, img }) => (
  <div className={cn(isMobile ? styles.boxMobile : styles.box)}>
    <div
      className={styles.img}
      style={{
        backgroundImage: `url('https://shift-backend.onrender.com${img}')`
      }}
    ></div>
    <div className={styles.date}>
      <span>в прокате</span> с 1 июня по 14 июня
    </div>
  </div>
)
