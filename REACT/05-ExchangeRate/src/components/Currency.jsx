import React from "react";

const Currency = () => {
  return (
    <>
      <div className="currency-div">
        <input type="number" className="amount" />
        <select className="from-currency-option">
          <option value="">USD</option>
          <option value="">EUR</option>
          <option value="">TL</option>
        </select>
        <select className="to-currency-option">
          <option value="">TL</option>
          <option value="">USD</option>
          <option value="">EUR</option>
        </select>
        <input type="number" className="result" />
      </div>
    </>
  );
};

export default Currency;
