import { useState } from 'react'
import './App.css'

function App() {
  const [num1, setNum1] = useState("")
  const [num2, setNum2] = useState("")

  const handleSum = () => {
    const sum = Number(num1) + Number(num2)
    alert(sum)
  }

  return (
    <>
      <h2>Suma</h2>

      <p>Number 1</p>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <p>Number 2</p>
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <button onClick={handleSum}>Sum</button>

    </>
  )
}

export default App