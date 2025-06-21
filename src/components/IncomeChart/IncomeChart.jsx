import React from "react";
import { Pie } from "react-chartjs-2";
import { getChartData } from "../../utils/chartHelpers";
import styles from "./IncomeChart.module.css";

const IncomeChart = ({ transactions }) => {
  const incomeTransactions = transactions.filter((t) => t.type === "income");

  if (incomeTransactions.length === 0) return null;

  return (
    <div className={styles.chartContainer}>
      <h3 className={styles.chartTitle}>Income Chart</h3>
      <Pie
        data={getChartData(transactions, "income")}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
};

export default IncomeChart;
