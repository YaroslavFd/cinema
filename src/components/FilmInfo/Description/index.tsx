import React from 'react'

import styles from './styles.module.scss'

interface IDescriptionProps {
  text: string
}

export const Description: React.FC<IDescriptionProps> = ({ text }) => {
  const [collapse, setCollapse] = React.useState<boolean>(false)

  const maxLength = 250

  return (
    <div className={styles.descr}>
      <span className={collapse ? styles.hideText : ''}>
        {text.length > maxLength ? text.slice(0, maxLength) + '...' : text}
      </span>
      <span className={collapse ? '' : styles.hideText}>{text}</span>
      {text.length > maxLength && (
        <button onClick={() => setCollapse(!collapse)}>{collapse ? 'скрыть' : 'раскрыть'}</button>
      )}
    </div>
  )
}
