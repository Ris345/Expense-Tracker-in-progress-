import React from "react";


function Body() {
    return (
      <div className="boundary">
        <Firstbody />
        <Secondbody />
      </div>
    );
  }
  
  
  function Firstbody() {
    return (
      <div className="Firstbody">
        <label>Purchase Medium:</label>
        <select id="option">
          <option className="option" id="Cash" value="Cash">Cash</option>
          <option className="option" id="Card" value="Card">Card</option>
          <option className="option" id="Venmo" value="Venmo">Venmo</option>
          <option className="option" id="Paypal" value="Paypal">Paypal</option>
          <option className="option" id="Crypto" value="Crypto">Crypto</option>
          <option className="option" id="Zelle" value="Zelle">Zelle</option>
          <option className="option" id="Cashapp" value="Cashapp">Cashapp</option>
        </select>
        <label>Expense:</label>
        <input id="name" placeholder="Expense"></input>
      </div>
    );
  }
  
  
  function Secondbody() {
    return (
      <div className="Secondbody">
        <label>Date:</label>
        <input type="date" id="date" placeholder="date"></input>
        <label>Amount$:</label>
        <input id="amount" placeholder="$"></input>
      </div>
    );
  }
  
  
  export default Body; 