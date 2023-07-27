import React from 'react'

export const useTwoStepAction = () => {
  const [isFirst, setIsFirst] = React.useState(true)

  const nextStep = React.useCallback(() => {
    setIsFirst(false)
  }, [])

  return { isFirst, nextStep }
}
