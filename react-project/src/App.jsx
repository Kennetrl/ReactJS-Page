import { useState } from 'react'
import './App.css'

function App() {

  // Control de vistas
  const [view, setView] = useState("home")

  // Sum numbers
  const [num1, setNum1] = useState("")
  const [num2, setNum2] = useState("")

  const handleSum = () => {
    const sum = Number(num1) + Number(num2)
    alert(sum)
  }

  return (
    <>
      {/* HOME */}
      {view === "home" && (
        <div>
          <h2>Home</h2>

          <button onClick={() => setView("sum")}>
            Button 1 (Suma)
          </button>
          <br />
          <button onClick={() => setView("calc")}>
            Button 2 (Calculadora)
          </button>
        </div>
      )}

      {/* SUMA */}
      {view === "sum" && (
        <div>
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

          <br /><br />
          <button onClick={() => setView("home")}>
            Volver
          </button>
        </div>
      )}

      {/* CALCULADORA */}
      {view === "calc" && (
        <div>
          <h2>Calculator</h2>

          <p>Aquí va tu calculadora...</p>

          <button onClick={() => setView("home")}>
            Volver
          </button>
        </div>
      )}
    </>
  )
}

export default App