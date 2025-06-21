import React from "react";
import { Pie } from "react-chartjs-2";
import { getChartData } from "../../utils/chartHelpers";
import styles from "./ExpenseChart.module.css";

const ExpenseChart = ({ transactions }) => {
  const expenseTransactions = transactions.filter((t) => t.type === "expense");

  if (expenseTransactions.length === 0) return null;

  return (
    <div className={styles.chartContainer}>
      <h3 className={styles.chartTitle}>Expense Chart</h3>
      <Pie
        data={getChartData(transactions, "expense")}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
};

export default ExpenseChart;
