import { useEffect, useState } from "react"

export function useCountdownTimer(endDate) {
  const calculateTimeLeft = () => {
    const difference = +new Date(endDate) - +new Date()
    if (difference <= 0) throw new Error("End date has already passed")
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
  })

  return timeLeft
}
