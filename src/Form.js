import React, { useState } from "react";
import Main from "./Main";
import Table from "./Table";
import ExpenseItem from "./ExpenseItem"; 


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
    console.log(items)
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
// update eexpense name and have the have the state as well
//update date name and have the have the state as well
//update amount name and have the have the state as well

// test  case 2
//input item 1
//input item 2
//input item 3
//input item 4
// add item button is pressed
// items on the table mut show!!!
