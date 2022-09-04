
import Main from "./Main";
import Form from "./Form"; 
import { useState } from "react";


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
        </thead>
      </table>
    </div>
  );
}









// 