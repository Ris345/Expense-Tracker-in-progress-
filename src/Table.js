
import Main from "./Main";
import Form from "./Form"; 
import { useState } from "react";


const Table = (props) => {
   

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
          <tr>
            <td>{props.data}</td>
            <td>{props.expenseData}</td>
            <td>{props.dateData}</td>
            <td>{props.amountData}</td>
         </tr>
        </thead>
      </table> 
    </div>
  );
}



export default Table; 





 