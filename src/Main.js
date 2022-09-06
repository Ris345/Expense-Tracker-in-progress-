import "./Expense.css";
import Header from "./Header";
import ExpenseBody from "./Form";
import Table from "./Table";
import Form from "./Form";
import { useState } from "react";

export default function Main(props) {
  const [expenseName, setExpenseName] = useState("");
  const [option, setOption] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");

  const items = {
    method: option,
    type: expenseName,
    date: date,
    amount: amount,
  };
  

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
    console.log(items);
    setOption("");
    setExpenseName("");
    setDate("");
    setAmount("");
  }

  return (
    <div className="Main">
      <Header />
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
          <input
            type="date"
            value={date}
            onChange={handledateChange}
            required
          />
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
      <Table
        data={items.method}
        expenseData={items.type}
        dateData={items.date}
        amountData={items.amount}
      />
    </div>
  );
}




// test case 1 
// type somehting in the input (main.js/parent)
// continue second box 
// continue third box 
// continue fourth box 
// now click the button add items (this is should make the items send to the child component!!)
// a list item should display in ... (table.js/child)


