import Main from "./Main";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { FaTheRedYeti, FaTrashAlt } from "react-icons/fa";



const Table = (props) => {
  const handleRemove = (id) => {
    debugger;
    const items = props.expenses.filter((expense) => expense.id !== id)
    props.setExpenses(items)
     console.log(items)
     console.log(id);
  };


  const expenseRows = props.expenses.map((expense, index) => {
    return (
        <tr key={expense.id}>
          <td>{expense.payment}</td>
          <td>{expense.items}</td>
          <td>{expense.date}</td>
          <td>{expense.amount}</td>
            <Button onClick ={ () => handleRemove(expense.id)}><FaTrashAlt/></Button>
        </tr>
      
    );
  });


  return (
    <div className="TableArea">
      <table>
        <thead>
          <tr>
            <th id="Type">Purchase Medium</th>
            <th id="Name">Expense</th>
            <th id="Date">Date</th>
            <th id="Amount">Amount</th>
          </tr>
        </thead>
        <tbody>{expenseRows}</tbody>
      </table>
    </div>
  );
};

export default Table;


