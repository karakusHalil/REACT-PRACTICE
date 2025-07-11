import { useState } from "react";
import "./App.css";

function App() {
  const [vize1, setVize1] = useState(0);
  const [vize2, setVize2] = useState(0);

  const calculateAverage = () => {
    debugger;
    const toplamSonuc = Add() / 2;
    getSum(toplamSonuc);
  };

  const Add = () => {
    debugger;
    const sum = vize1 + vize2;
    return sum;
  };

  const getSum = (sonuc) => {
    console.log("Ortalama :" + sonuc);
  };

  return (
    <>
      <div>
        <div>
          <input
            type="number"
            value={vize1}
            onChange={(e) => setVize1(Number(e.target.value))}
          />
        </div>
        <div>
          <input
            type="number"
            value={vize2}
            onChange={(e) => setVize2(Number(e.target.value))}
          />
        </div>
        <div>
          <button onClick={calculateAverage}>Ortalama Bul</button>
        </div>
      </div>
    </>
  );
}

export default App;
