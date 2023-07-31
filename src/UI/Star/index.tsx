import React from 'react'

import { ReactComponent as StarEmpty } from '../../assets/star-empty.svg'
import { ReactComponent as StarFill } from '../../assets/star-fill.svg'

interface IStarProps {
  isEmpty?: boolean
}

export const Star: React.FC<IStarProps> = ({ isEmpty = false }) => {
  if (!isEmpty) {
    return <StarFill />
  } else {
    return <StarEmpty />
  }
}
