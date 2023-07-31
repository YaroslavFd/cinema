import React from 'react'


export const useTimer = () => {
  const [time, setTime] = React.useState(0)

  const start = (initial: number) => {
    setTime(initial)
  }

  React.useEffect(() => {
    if (time === 0) return

    const interval = setInterval(() => {
      setTime((prev) => prev - 1)
    }, 950)

    return () => clearInterval(interval)
  }, [time])

  return { time, timesUp: time === 0, start }
}
