import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, expenses, dispatch, currency } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);

  const handleBudgetChange = (event) => {
    const newBudget = parseFloat(event.target.value);

    if (newBudget > 20000) {
      alert(`Cannot increase the budget beyond 20000!`);
    }

    if (!isNaN(newBudget)) {
      if (newBudget >= totalExpenses) {
        dispatch({
          type: "SET_BUDGET",
          payload: newBudget,
        });
      } else {
        alert(
          `Cannot reduce the budget! Current total expenses: ${totalExpenses}`
        );
      }
    }
  };

  return (
    <div className="alert alert-secondary">
      <span>Budget: {currency}</span>
      <input
        type="number"
        step="10"
        value={budget}
        onChange={handleBudgetChange}
      />
    </div>
  );
};

export default Budget;
