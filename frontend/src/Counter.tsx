import { useState } from "react"

export function Counter() {
  const [counter, setCounter] = useState(10)

  const inc = () => {
    setCounter(counter + 1)
  }

  return (
    <>
      <div>Counter: {counter}</div>
      <button onClick={inc}>Increment</button>
    </>
  )
}
