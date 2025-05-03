import React, { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [time, setTime] = useState(10)
  const [start, setStart] = useState(false)

  function handleClick() {
    setStart(true)
  }

  useEffect(() => {
    if (start && time > 0) {
      let timer = setInterval(() => {
        setTime(time - 1)
      }, 1000)
      return () => clearInterval(timer)
    }
    if (time === 0) {
      setStart(false)
      setTime(10)
    }
  }, [time, start])
  return (



    <>
      {time}
      <button onClick={handleClick}>
        Start
      </button>

      {time === 0 && (
        prompt("Task Completed")
      )}
    </>
  )
}

export default App
