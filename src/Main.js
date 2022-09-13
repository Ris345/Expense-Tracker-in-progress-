import "./Expense.css";
import Header from "./Header";
import Table from "./Table";
import { useState } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Main(props) {
  const [expenseName, setExpenseName] = useState("");
  const [option, setOption] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);


  function gatherInfo() {
    setExpenses((prevExpenses) => {
      return [
        ...prevExpenses,
        {
          id: Math.random(),
          payment: option,
          items: expenseName,
          date: date,
          amount: amount,
        },
      ];
    });
  }

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
    gatherInfo();
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
          <input
            type="text"
            value={option}
            onChange={handleOption}
            placeholder="Payment"
            required
          />
          <label>Expense</label>
          <input
            type="text"
            value={expenseName}
            onChange={handleChange}
            required
            placeholder="Expense"
          />
          <label>Date</label>
          <input
            type="date"
            name="date"
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
            number
            placeholder="Amount"
            min="0"
            max="10000000000000"
          />
          <div className="text-center">
            <button type="submit" class="btn btn-outline-success">
              Add Expenses
            </button>
          </div>
        </form>
      </div>
       <Table
        handleSubmit={handleSubmit}
        expenses={expenses}
        setExpenses={setExpenses}
      />
    </div>
  );
}
