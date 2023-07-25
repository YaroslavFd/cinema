import React from 'react'
import ContentLoader from 'react-content-loader'
import { useMediaQuery } from 'react-responsive'

import styles from './styles.module.scss'

export const Skeleton: React.FC = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 567px)'
  })

  if (isMobile) {
    return (
      <ContentLoader
        speed={2}
        width={264}
        height={555}
        viewBox="0 0 264 555"
        backgroundColor="#d6d6d6"
        foregroundColor="#e3e3e3"
      >
        <rect x="64" y="0" rx="0" ry="0" width="136" height="46" />
        <rect x="0" y="46" rx="8" ry="8" width="264" height="358" />
        <rect x="0" y="416" rx="0" ry="0" width="200" height="20" />
        <rect x="0" y="441" rx="0" ry="0" width="212" height="16" />
        <rect x="0" y="465" rx="0" ry="0" width="212" height="38" />
        <rect x="0" y="514" rx="8" ry="8" width="264" height="40" />
      </ContentLoader>
    )
  }

  return (
    <ContentLoader
      className={styles.wrapper}
      speed={2}
      width={212}
      height={484}
      viewBox="0 0 212 484"
      backgroundColor="#d6d6d6"
      foregroundColor="#e3e3e3"
    >
      <rect x="38" y="0" width="136" height="46" />
      <rect x="0" y="46" rx="8" ry="8" width="212" height="288" />
      <rect x="0" y="346" rx="0" ry="0" width="200" height="20" />
      <rect x="0" y="370" rx="0" ry="0" width="212" height="16" />
      <rect x="0" y="395" rx="0" ry="0" width="212" height="38" />
      <rect x="0" y="443" rx="8" ry="8" width="156" height="40" />
    </ContentLoader>
  )
}
