import { useState } from "react";
import "../css/currency.css";
import { FaArrowRightLong } from "react-icons/fa6";
import axios from "axios";

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_Jbuc4T6LTPmVmTyIOFx9AaKwWhWIwylAXNLhYQeI";

const Currency = () => {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("TRY");
  const [result, setResult] = useState(0);
  let EXCHANGE_API = `${BASE_URL}`;

  const exchange = async () => {
    const response = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`
    );
    const result = response.data.data[toCurrency] * amount;
    setResult(result.toFixed(2));
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
            <option value="TRY">TL</option>
          </select>
          <FaArrowRightLong />
          <select
            className="to-currency-option"
            defaultValue="TL"
            onChange={(e) => setToCurrency(e.target.value)}
          >
            <option value="TRY">TL</option>
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
