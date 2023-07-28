import React from 'react'

import { Form } from './Form'
import { Tickets } from './Tickets'

import styles from './styles.module.scss'

export const UserProfile: React.FC = () => (
  <div className={styles.wrapper}>
    <Form />
    <div className={styles.line}></div>
    <div className={styles.tickets}>
      <h3 className={styles.title}>Действующие билеты</h3>
      <Tickets />
    </div>
  </div>
)
