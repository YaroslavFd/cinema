import React from 'react'

import pageNotFoundSvg from '../../assets/page-not-found.svg'
import styles from './styles.module.scss'

export const NotFound: React.FC = () => (
  <div className={styles.wrapper}>
    <h2>Страница не&nbsp;найдена</h2>
    <p>Возможно, она была перемещена, или вы&nbsp;просто неверно указали адрес страницы.</p>
    <img src={pageNotFoundSvg} alt="Страница не найдена" />
  </div>
)
