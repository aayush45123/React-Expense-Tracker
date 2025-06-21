import React, { useState } from "react";
import Expense from "./components/Expense/Expense";
import IncomeChart from "./components/IncomeChart/IncomeChart";
import ExpenseChart from "./components/ExpenseChart/ExpenseChart";
import "./App.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register required chart elements
ChartJS.register(ArcElement, Tooltip, Legend);

const App = () => {
  const [transactions, setTransactions] = useState([]);

  const hasIncome = transactions.some((t) => t.type === "income");
  const hasExpense = transactions.some((t) => t.type === "expense");

  return (
    <div className="appContainer">
      {hasIncome && (
        <div className="chartBox">
          <IncomeChart transactions={transactions} />
        </div>
      )}

      <Expense transactions={transactions} setTransactions={setTransactions} />

      {hasExpense && (
        <div className="chartBox">
          <ExpenseChart transactions={transactions} />
        </div>
      )}
    </div>
  );
};

export default App;
