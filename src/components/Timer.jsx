import React, { useState, useEffect } from 'react'

const CountdownBar = ({ duration }) => {
  const [timeLeft, setTimeLeft] = useState(duration) // Оставшееся время
  const [progress, setProgress] = useState(100) // Прогресс в процентах

  useEffect(() => {
    // Таймер обновляет состояние каждую секунду
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(interval)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval) // Очистка таймера при размонтировании
  }, [])

  useEffect(() => {
    // Обновление прогресса в зависимости от оставшегося времени
    setProgress((timeLeft / duration) * 100)
  }, [timeLeft, duration])

  return (
    <div
      className="flex items-center gap-3"
      style={{ width: '300px', margin: '20px auto' }}>
      {/* <div
        style={{
          height: '8px',
          width: '100%',
          backgroundColor: '#e0e0e0',
          borderRadius: '5px',
          overflow: 'hidden',
        }}>
        <div
          style={{
            height: '100%',
            width: `${progress}%`,
            backgroundColor: '#03777c',
            transition: 'width 0.5s linear',
          }}></div>
      </div> */}
      <div className="flex fixed right-5 top-14 items-center gap-1 time">
        <div>
          <img
            src="/timer.png"
            alt=""
            className="w-6"
          />
        </div>
        <div className="font-semibold ">
          {new Date(timeLeft * 1000).toISOString().substr(14, 5)}
        </div>
        <div>
          <img
            src="/arrow-b.png"
            alt=""
            className="w-3 ml-2"
          />
        </div>
      </div>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <CountdownBar duration={1500} />
    </div>
  )
}

export default App
