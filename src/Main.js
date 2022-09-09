import "./Expense.css";
import Header from "./Header";
import Table from "./Table";
import { useState } from "react";

export default function Main(props) {
  debugger;
  const [expenseName, setExpenseName] = useState("");
  const [option, setOption] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([
    {
      payment: "",
      items: "",
      date: "",
      amount: "",
    },
  ]);

  

  function gatherInfo() {
    setExpenses({
      payment: option,
      items: expenseName,
      date: date,
      amount: amount,
    });
  }

  // const sendData = (props) => {
  //   const items = {
  //     method: option,
  //     type: expenseName,
  //     date: date,
  //     amount: amount,
  //   };
  // };

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
            text
            placeholder="Expense"
          />
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={handledateChange}
            required
            number
          />
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            onChange={handleamountChange}
            required
            number
            placeholder="$"
          />
          <button type="submit">Add Expenses</button>
        </form>
      </div>
      <Table handleSubmit={handleSubmit} expenses={expenses} />
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

//test case 1 logic
// if soemthing is typed in the input box && the button is cicked
// display the items in the table
// else
// don't display the items


// test case 2 
// user is able to add items in a list continiously with each input 
//



// setOption("");
// setExpenseName("");
// setDate("");
// setAmount("");

// sendData();
// const items = {
//   method: option,
//   type: expenseName,
//   date: date,
//   amount: amount,
// };
// const optionUpdate = items[0]
// console.log(optionUpdate)
// const expenseNameupdate = items[1]
// console.log(expenseNameupdate)
// const dateUpdates = items[2]
// console.log(dateUpdates)
// const amountUpdate = items[3]
// console.log(amountUpdate)

// mapArr();

//  function mapArr () {
//    let newArray = dataArr.map(data => <td>{data}</td>)
//   console.log(newArray)
// }

// const items = [option, expenseName, date, amount];
// const optionUpdate = items[0]
// console.log(optionUpdate)

// I need a function that checks if the input field is full if it is not full then

// I need to type something in the input, after the button is presssed I need the object to display,

// setOption("");
// setExpenseName("");
// setDate("");
// setAmount("");
