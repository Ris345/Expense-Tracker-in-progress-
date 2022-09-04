import React, { useState } from "react";
import App from "./App";
import Table from "./Table";

export default function ExpenseBody(props) {
  const [expenseName, setExpenseName] = useState("");
  const [option, setOption] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");

  function handleOption(e) {
    setOption(e.target.value);
  }

  function handleChange(e) {
    setExpenseName(e.target.value);
  }

  function handledateChange(e) {
    setDate(e.target.value);
  }

  function handleamountChange(e) {
    setAmount(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const items = {
      method: option,
      type: expenseName,
      date: date,
      amount: amount,
    };
    console.log(items);
    setOption("");
    setExpenseName("");
    setDate("");
    setAmount("");
  }

  return (
    <div className="ExpenseForm">
      <form onSubmit={handleSubmit}>
        <label>Payment</label>
        <input type="text" value={option} onChange={handleOption} required />
        <label>Expense</label>
        <input
          type="text"
          value={expenseName}
          onChange={handleChange}
          required
        />
        <label>Date</label>
        <input type="date" value={date} onChange={handledateChange} required />
        <label>Amount</label>
        <input
          type="number"
          value={amount}
          onChange={handleamountChange}
          required
        />
        <button type="submit">Add Expenses</button>
      </form>
    </div>
  );
}

//testcase 1
// chose an item in the slect element and have it consle.log
// updat eexpense name and have the have the state as well
//updat date name and have the have the state as well
//updat amount name and have the have the state as well
