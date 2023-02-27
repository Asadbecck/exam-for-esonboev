import React, { useState } from 'react'

function Moli() {
  const [name, setName] = useState(["Harry", "Sarah", "John"])
  const [value, setValue] = useState("")
  const AddOneName = () => {
    name.push(value)
    setName([...name])
    setValue("")
  }
  return (
    <>
      <div>
        <ul>
          {name.map((list) => (
            <li key={list}>{list}</li>
          )
          )}
        </ul>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          onClick={AddOneName}
        >
        Add a Name
        </button>
      </div>

    </>
  )
}

export default Moli
