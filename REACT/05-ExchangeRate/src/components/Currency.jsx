import { useState } from "react";
import "../css/currency.css";
import { FaArrowRightLong } from "react-icons/fa6";

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_Jbuc4T6LTPmVmTyIOFx9AaKwWhWIwylAXNLhYQeI";

const Currency = () => {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("TL");
  const [result, setResult] = useState(0);

  const exchange = () => {
    console.log(amount);
    console.log(fromCurrency);
    console.log(toCurrency);
  };

  return (
    <>
      <div className="currency-div">
        <div className="title">
          <h3>DÖVİZ KURU</h3>
        </div>
        <div className="exchange">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="amount"
          />

          <select
            className="from-currency-option"
            defaultValue="USD"
            onChange={(e) => setFromCurrency(e.target.value)}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="TL">TL</option>
          </select>
          <FaArrowRightLong />
          <select
            className="to-currency-option"
            defaultValue="TL"
            onChange={(e) => setToCurrency(e.target.value)}
          >
            <option value="TL">TL</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
          <input
            type="number"
            className="result"
            value={result}
            onChange={(e) => setResult(e.target.value)}
          />
        </div>
        <div>
          <button onClick={exchange} className="btn-exchange">
            Çevir
          </button>
        </div>
      </div>
    </>
  );
};

export default Currency;
