import Main from "./Main";
import { useState } from "react";
import { Button } from 'react-bootstrap';
import { FaTrashAlt } from 'react-icons/fa'

const Table = (props) => {
  const expenseRows = props.expenses.map((expense) => {

    return (
      <tr key={expense.id}>
        <td>{expense.payment}</td>
        <td>{expense.items}</td>
        <td>{expense.date}</td>
        <td>{expense.amount}</td>
        <Button onClick={() => props.handleRemove()}><FaTrashAlt/></Button>
      </tr>
    );
  });
  return (
    <div>
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


