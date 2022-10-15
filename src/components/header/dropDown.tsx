import { useState } from 'react'

export default function () {
  const [isOpen, setIsOpen] = useState(false)
  return(
    <select name="section" className="dropDownBtn">
        <option value="0">All</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
        <option value="4">Option 4</option>
    </select>
  )
  return (
    <span className="dropDown">
      <div
        className="dropDownBtn"
        onClick={() => {
          setIsOpen(!isOpen)
        }}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 47,
          marginRight: 10,
          flex: 1,
        }}
      >
        <span style={{ flex: 1, padding: 10, textAlign: 'right' }}>All</span>
        <img src="/imgs/down.svg" style={{ width: 24, height: 24 }} />
      </div>
      <div className={`dropDownBtn-list ${isOpen ? 'open' : ''}`}>
        <h1>Hi I'm here</h1>
      </div>
    </span>
  )
}
