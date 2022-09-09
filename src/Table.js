import Main from "./Main";
import { useState } from "react";

const Table = (props) => {
  debugger;
  const retrivedItems = props.expenses;
  const firstItem = retrivedItems.payment;
  const secondItem = retrivedItems.items;
  const thirdItem = retrivedItems.date;
  const fourthItem = retrivedItems.amount;

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
        <tbody>
          <tr>
            <td>{firstItem}</td>
            <td>{secondItem}</td>
            <td>{thirdItem}</td>
            <td>{fourthItem}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;

