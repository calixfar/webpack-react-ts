import React, { useState } from 'react'

export const ClickCounter = () => {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <p>counter: {counter}</p>
      <button onClick={() => setCounter((c) => c + 1)}>Click me </button>
    </div>
  )
}
