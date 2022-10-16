import React, { useState, ReactElement } from 'react'

export default function homePage (): ReactElement {
  const [counter, setCounter] = useState(5)
  if (counter >= 0) {
    setTimeout(() => {
      setCounter(counter - 1)
      if (counter === 1) {
        window.location.href = '/product/578902-00'
      }
    }, 1000)
  }
  return (
      <div className="container">
        <h1>Home Page</h1>
        <h3>You will be redirected to the demo product in {counter} second</h3>
      </div>
  )
}
