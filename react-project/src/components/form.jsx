import { useState } from 'react';

export default function FormButton() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const handleSum = () => {
    const sum = Number(num1) + Number(num2);
    alert(sum);
  };

  return (
    <>
      <p>Number 1</p>
      <input type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)} />
      <p>Number 2</p>

      <input type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)} />
      <button onClick={handleSum}> Sum </button>
    </>
  );
}
