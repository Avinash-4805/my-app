import React, { useState } from 'react'

function State() {
    const [count, setCount] = useState(0)
    const handalCount = () => {
        setCount(() => count + 1)
    }
  return (
    <>
      <div className='container text-center'>
        <h1>{count}</h1>
        <button className='btn btn-success' onClick={handalCount}>Count the number</button>
      </div>
    </>
  )
}

export default State
