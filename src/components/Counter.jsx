import { useState } from 'react'

// Toda função que começa com use = Hook (= gancho)

export function Counter() {
  // useState(0) retorna um array com 2 posições
  const [counter, setCounter] = useState(0)

  function increment() {
    setCounter(counter + 1)
  }
  return (
    <div>
      <h2>{counter} </h2>
      <button type="button" onClick={increment}>
        Increment
      </button>
    </div>
  )
}
