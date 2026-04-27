import { useState } from 'react'
import Button from './Button'

function Calculator({ onBack }) {
  const [display, setDisplay] = useState('0')
  const [stored, setStored] = useState(null)
  const [operator, setOperator] = useState(null)
  const [waitingForNext, setWaitingForNext] = useState(false)

  const handleDigit = (digit) => {
    if (waitingForNext) {
      setDisplay(String(digit))
      setWaitingForNext(false)
    } else {
      setDisplay(display === '0' ? String(digit) : display + digit)
    }
  }

  const handleOperator = (op) => {
    setStored(Number(display))
    setOperator(op)
    setWaitingForNext(true)
  }

  const handleEquals = () => {
    if (operator === null || stored === null) return
    const current = Number(display)
    let result
    switch (operator) {
      case '+': result = stored + current; break
      case '-': result = stored - current; break
      case '*': result = stored * current; break
      case '/': result = current !== 0 ? stored / current : 'Error'; break
    }
    setDisplay(String(result))
    setStored(null)
    setOperator(null)
    setWaitingForNext(false)
  }

  const handleClear = () => {
    setDisplay('0')
    setStored(null)
    setOperator(null)
    setWaitingForNext(false)
  }

  const handleDecimal = () => {
    if (waitingForNext) {
      setDisplay('0.')
      setWaitingForNext(false)
      return
    }
    if (!display.includes('.')) setDisplay(display + '.')
  }

  return (
    <div className="flex flex-col items-center gap-3 p-6">
      <Button onClick={onBack}>← Back</Button>
      <h2 className="text-2xl font-semibold">Calculator</h2>

      <div className="w-56 px-3 py-2 text-right text-2xl border border-gray-400 rounded bg-gray-50 overflow-hidden">
        {display}
      </div>

      <div className="grid grid-cols-4 gap-2">
        <Button onClick={handleClear}>C</Button>
        <Button onClick={() => {}}>±</Button>
        <Button onClick={() => {}}>%</Button>
        <Button onClick={() => handleOperator('/')}>÷</Button>

        {[7, 8, 9].map((n) => (
          <Button key={n} onClick={() => handleDigit(String(n))}>{n}</Button>
        ))}
        <Button onClick={() => handleOperator('*')}>×</Button>

        {[4, 5, 6].map((n) => (
          <Button key={n} onClick={() => handleDigit(String(n))}>{n}</Button>
        ))}
        <Button onClick={() => handleOperator('-')}>−</Button>

        {[1, 2, 3].map((n) => (
          <Button key={n} onClick={() => handleDigit(String(n))}>{n}</Button>
        ))}
        <Button onClick={() => handleOperator('+')}>+</Button>

        <Button onClick={() => handleDigit('0')}>0</Button>
        <Button onClick={handleDecimal}>.</Button>
        <Button onClick={handleEquals} className="col-span-2">=</Button>
      </div>
    </div>
  )
}

export default Calculator
