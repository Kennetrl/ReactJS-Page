import { useState } from 'react'
import Button from './Button'

function Sum({ onBack }) {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')

  const handleSum = () => {
    const sum = Number(num1) + Number(num2)
    alert(sum)
  }

  return (
    <div className="flex flex-col items-center gap-3 p-6">
      <Button onClick={onBack}>← Back</Button>
      <h2 className="text-2xl font-semibold">Sum</h2>

      <p>Number 1</p>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        className="border border-gray-400 rounded px-2 py-1"
      />

      <p>Number 2</p>
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        className="border border-gray-400 rounded px-2 py-1"
      />

      <Button onClick={handleSum}>Sum</Button>
    </div>
  )
}

export default Sum
