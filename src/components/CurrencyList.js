import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
const CurrencyList = () => {
  const currencies = ["£ Pounds", "$ Dollars", "€ Euros", "₹ Rupees"];
  const { dispatch } = useContext(AppContext);

  const changeCurrency = (event) => {
    const selectedCurrency = event.target.value;
    let symbol = "";

    switch (selectedCurrency) {
      case "£ Pounds":
        symbol = "£";
        break;
      case "$ Dollars":
        symbol = "$";
        break;
      case "€ Euros":
        symbol = "€";
        break;
      case "₹ Rupees":
        symbol = "₹";
        break;
      default:
        symbol = "";
        break;
    }
    dispatch({ type: "CHG_CURRENCY", payload: symbol });
  };

  return (
    <div className="alert bg-success">
      <select
        className="bg-success text-white"
        onChange={(e) => changeCurrency(e)}
        style={{ width: "100%" }}
      >
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {`Currency (${currency})`}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencyList;
