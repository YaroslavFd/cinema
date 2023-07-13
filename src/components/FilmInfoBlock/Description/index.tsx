import React from 'react'

import styles from './styles.module.scss'

export const Description: React.FC = () => {
  const text =
    'Себастьян планирует провести уикенд со своей очаровательной невестой Элли и ее семьей в их роскошном фамильном поместье, где есть собственное поле для гольфа, шикарная яхта и даже ручной павлин. Отличный план на длинные выходные, но Элли настаивает, чтобы Себастьян также пригласил своего отца Сальво, эксцентричного парикмахера родом'

  const [collapse, setCollapse] = React.useState<boolean>(false)

  return (
    <div className={styles.descr}>
      <span className={collapse ? styles.hideText : ''}>
        {text.length > 300 ? text.slice(0, 300) + '...' : text}
      </span>
      <span className={collapse ? '' : styles.hideText}>{text}</span>
      {text.length > 300 && (
        <button onClick={() => setCollapse(!collapse)}>{collapse ? 'скрыть' : 'раскрыть'}</button>
      )}
    </div>
  )
}
