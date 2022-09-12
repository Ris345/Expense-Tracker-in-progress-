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
  const [list, setList] = useState();
 
  console.log(expenses)

  function gatherInfo() {
    setExpenses((prevExpenses) => {
      return [
        ...prevExpenses,
        {
          payment: option,
          items: expenseName,
          date: date,
          amount: amount,
        },
      ];
    });
  }


  const handleRemove = () => {
    setExpenses([]);
    let checkItems = expenses.filter((x) => console.log(x.length > 5))
    console.log(checkItems)
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
            text
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
          />
          <Button type="submit" class="btn btn-primary">
            Add Expenses
          </Button>
        </form>
      </div>
      <Table
        handleSubmit={handleSubmit}
        expenses={expenses}
        handleRemove={handleRemove}
      />
    </div>
  );
}

//test case 3
// user is able  to delete items from the list with a button press
// EXPECTED
// user is able to delete seelctd rows
// ACTUAL
// delete button deletes all rows

// bug fix
// date should apear in DD:MM:YY format

// how to local storage

// .filter method to delete only the selected items.
