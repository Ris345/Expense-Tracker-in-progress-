import React from "react";
import App from "./App";
import Form from "./Form"; 


export default function Table(props) {
  
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
          <tr></tr>
        </thead>
      </table>
    </div>
  );
}


function TableRow() {
  return (
    <td></td>
  )
}






