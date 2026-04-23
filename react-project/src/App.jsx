import { useState } from 'react'
import './App.css'

function App() {

  // Views
  const [view, setView] = useState("home")

  // Sum numbers
  const [num1, setNum1] = useState("")
  const [num2, setNum2] = useState("")

  const handleSum = () => {
    const sum = Number(num1) + Number(num2)
    alert(sum)
  }

  // Calculator
  const [calc, setCalc] = useState("")

  const handleCalc = (value) => {
    if (value === "C") {
      setCalc("")
    } else if (value === "⌫") {
      setCalc(calc.slice(0, -1))
    } else if (value === "=") {
      try {
        setCalc(eval(calc).toString())
      } catch {
        setCalc("Error")
      }
    } else {
      setCalc(calc + value)
    }
  }

  return (
    <>
      {/* Home */}
      {view === "home" && (
        <div className='container'>
          <h2>Home</h2>

          <button onClick={() => setView("sum")}>
            Button 1 (Suma)
          </button>
          <br />
          <button onClick={() => setView("calc")}>
            Button 2 (Calculator)
          </button>
        </div>
      )}

      {/* Sum */}
      {view === "sum" && (
        <div className='container'>
          <h2>Sum</h2>

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
          <br />
          <button onClick={handleSum}>Sum</button>

          <br /><br />
          <button onClick={() => setView("home")}>
            Back
          </button>
        </div>
      )}

      {/* Calculator */}
      {view === "calc" && (
        <div className='container'>
          <h2>Calculator</h2>

          {/*Display*/}
          <input type="text" value={calc} readOnly style={{ width: "20rem" }} />

          <br />

          {/*Buttons*/}

          <div className='calc-buttons'>
            {[
              "/", "*", "C", "⌫",
              "7", "8", "9", "-",
              "4", "5", "6", "+",
              "1", "2", "3", "=",
              "0", "."
            ].map((item) => (
              <button key={item} onClick={() => handleCalc(item)}>
                {item}
              </button>
            ))}
          </div>
          <br />
          <button onClick={() => setView("home")}>
            Back
          </button>
        </div>
      )}
    </>
  )
}

export default App