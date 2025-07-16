import "../css/currency.css";
import { FaArrowRightLong } from "react-icons/fa6";

const Currency = () => {
  return (
    <>
      <div className="currency-div">
        <div className="title">
          <h3>DÖVİZ KURU</h3>
        </div>
        <div className="exchange">
          <input type="number" className="amount" />
          <select className="from-currency-option">
            <option value="">USD</option>
            <option value="">EUR</option>
            <option value="">TL</option>
          </select>
          <FaArrowRightLong />
          <select className="to-currency-option">
            <option value="">TL</option>
            <option value="">USD</option>
            <option value="">EUR</option>
          </select>
          <input type="number" className="result" />
        </div>
        <div>
          <button className="btn-exchange">Çevir</button>
        </div>
      </div>
    </>
  );
};

export default Currency;
