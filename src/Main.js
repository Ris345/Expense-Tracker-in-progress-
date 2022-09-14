import "./Expense.css";
import Header from "./Header";
import Table from "./Table";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

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

  useEffect(() => {
    const expenseData = localStorage.getItem("expense-list");
    if (expenseData) {
      setExpenses(JSON.parse(expenseData));
    }
  }, []);

  useEffect(() => {
    const expenseData = localStorage.setItem(
      "expense-list",
      JSON.stringify(expenses)
    );
  });

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
    <div>
      <Header />
      <div class="d-flex justify-content-center">
        <form onSubmit={handleSubmit}>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Payment</label>
          </div>
          <div className="col-sm-12">
            <input
              type="text"
              value={option}
              onChange={handleOption}
              placeholder="Payment"
              required
              className="form-control"
            />
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Expense</label>
          </div>
          <div className="col-sm-12">
            <input
              type="text"
              value={expenseName}
              onChange={handleChange}
              required
              placeholder="Expense"
              className="form-control"
            />
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Date</label>
          </div>
          <div class="col-sm-12">
            <input
              type="date"
              name="date"
              value={date}
              onChange={handledateChange}
              required
              className="form-control"
            />
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Amount</label>
          </div>
          <div className="col-sm-12">
            <input
              type="number"
              value={amount}
              onChange={handleamountChange}
              required
              number
              placeholder="Amount"
              step="any"
              className="form-control"
            />
          </div>
          <button id="submit" type="submit" class="btn btn-outline-success">
            Add Expenses
          </button>
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
