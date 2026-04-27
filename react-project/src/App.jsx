import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Sum from './components/Sum'
import Calculator from './components/Calculator'
import Api from './components/Api'

function App() {
  const [view, setView] = useState('home')

  if (view === 'sum') return <Sum onBack={() => setView('home')} />
  if (view === 'calculator') return <Calculator onBack={() => setView('home')} />
  if (view === 'api') return <Api onBack={() => setView('home')} />

  return (
    <div className="flex flex-col gap-4 items-center p-8">
      <h1 className="text-4xl font-semibold">React App</h1>
      <Button onClick={() => setView('sum')}>Sum</Button>
      <Button onClick={() => setView('calculator')}>Calculator</Button>
      <Button onClick={() => setView('api')}>Demon Slayer API</Button>
    </div>
  )
}

export default App
