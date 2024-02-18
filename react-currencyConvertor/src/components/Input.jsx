import React, { useId } from "react";

function Input({
  label,
  amount,
  changeAmount,
  changeCurrency,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();
  return (
    <div>
      <div>
        <label htmlFor={amountInputId}>{label}</label>
        <input
          id={amountInputId}
          type="number"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => changeAmount && changeAmount(Number(e.target.value))}
        />
      </div>
      <div>
        <p>Currency Type</p>
        <select
          value={selectCurrency}
          onChange={(e) => changeCurrency && changeCurrency(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Input;
