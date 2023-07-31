import React from 'react'

export const useTimedBox = (totalTime = 8) => {
  const [isVisible, setIsVisible] = React.useState(true)
  const [isLeaving, setIsLeaving] = React.useState(false)
  const [timeLeft, setTimeLeft] = React.useState(totalTime)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1)
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  React.useEffect(() => {
    if (timeLeft <= 0) {
      setIsLeaving(true)
      setTimeout(() => {
        setIsVisible(false)
      }, 1000)
    }
  }, [timeLeft])

  const progress = (timeLeft / totalTime) * 100

  return { isVisible, isLeaving, progress }
}
