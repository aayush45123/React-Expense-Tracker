import React, { useEffect, useState } from "react";
import "./Expense.css";
import { FaIndianRupeeSign } from "react-icons/fa6";

const Expense = ({ transactions, setTransactions }) => {
  const [transaction, setTransaction] = useState({
    id: "",
    type: "",
    category: "",
    amount: "",
    date: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTransaction({ ...transaction, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTransaction = {
      ...transaction,
      id: Date.now(),
    };
    const updatedTransactions = [newTransaction, ...transactions];
    setTransactions(updatedTransactions);
    localStorage.setItem("transactions", JSON.stringify(updatedTransactions));

    setTransaction({
      id: "",
      type: "",
      category: "",
      amount: "",
      date: "",
    });
  };

  useEffect(() => {
    const storedTransactions = localStorage.getItem("transactions");
    if (storedTransactions) {
      setTransactions(JSON.parse(storedTransactions));
    }
  }, [setTransactions]);

  const totalBalance = transactions.reduce((account, current) => {
    const amount = parseFloat(current.amount) || 0;
    return current.type === "income" ? account + amount : account - amount;
  }, 0);
  return (
    <div className="expenseContainer">
      <div className="header">
        <h2>Expense Tracker</h2>
        <p>Powered By Aayush</p>
      </div>

      <div className="balInfo">
        <h4>
          Total Balance: {totalBalance} <FaIndianRupeeSign />
        </h4>
        <p>{new Date().toLocaleDateString("en-US", { weekday: "long" })}</p>
      </div>

      <div className="expenseForm" style={{ marginTop: "2rem" }}>
        <h4>Add income or expense below</h4>
        <form onSubmit={handleSubmit}>
          <label htmlFor="type">Type</label>
          <input
            type="text"
            name="type"
            value={transaction.type}
            onChange={handleChange}
            placeholder="income or expense"
            required
          />

          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={transaction.category}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>

            <optgroup label="Income">
              <option value="salary">Salary</option>
              <option value="freelance">Freelance</option>
              <option value="investment">Investment</option>
              <option value="gifts">Gifts</option>
              <option value="rental-income">Rental Income</option>
              <option value="bonus">Bonus</option>
              <option value="interest">Interest</option>
            </optgroup>

            <optgroup label="Expense">
              <option value="food">Food</option>
              <option value="rent">Rent</option>
              <option value="shopping">Shopping</option>
              <option value="entertainment">Entertainment</option>
              <option value="travel">Travel</option>
              <option value="healthcare">Healthcare</option>
              <option value="utilities">Utilities</option>
              <option value="subscriptions">Subscriptions</option>
              <option value="education">Education</option>
              <option value="transport">Transport</option>
              <option value="others">Others</option>
            </optgroup>
          </select>

          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            name="amount"
            value={transaction.amount}
            onChange={handleChange}
            required
          />

          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            value={transaction.date}
            onChange={handleChange}
            required
          />

          <button type="submit">Create</button>
        </form>

        <div className="resultContainer">
          <h4>Transactions</h4>
          {transactions.map((transaction) => (
            <div className="result" key={transaction.id}>
              <p>
                <strong>{transaction.type.toUpperCase()}</strong>:{" "}
                {transaction.amount}
                <FaIndianRupeeSign /> - {transaction.category} on{" "}
                {transaction.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expense;
