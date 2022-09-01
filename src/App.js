import "./App.css";
import Header from "./Header";
import Body from "./Body";
import Table from "./Table";
import React from "react";
import { useState } from "react";

export default function Main() {
  const name = useState(["hello"]);
  console.log(name);
  function handleClick() {
    // Medium();
    // Expenses();
    // Date();
    // Amount();
    console.log("hello");
  }

  return (
    <div className="Main">
      <Header />
      <Body />
      <p>{name}</p>
      <button onClick={handleClick}>Add Expenses</button>
      <Table />
    </div>
  );
}

// function Medium() {
//   let medium = document.getElementById("option").value;
//   let mediumRow = document.createElement("tr");
//   mediumRow.className = "medium";
//   mediumRow.innerText = medium;
//   let type = document.getElementById("Type").appendChild(mediumRow);
// }

// function Expenses() {
//   let expenses = document.getElementById("name").value;
//   let expenseRow = document.createElement("tr");
//   expenseRow.className = "expense";
//   expenseRow.innerText = expenses;
//   let name = document.getElementById("Name").appendChild(expenseRow);
// }

// function Date() {
//   let date = document.getElementById("date").value;
//   let dateRow = document.createElement("tr");
//   dateRow.className = "date";
//   dateRow.innerText = date;
//   let dates = document.getElementById("Date").appendChild(dateRow);
// }

// function Amount() {
//   let amount = document.getElementById("amount").value;
//   let amountRow = document.createElement("tr");
//   amountRow.className = "amount";
//   amountRow.innerText = amount;
//   console.log(amountRow);
//   let amounts = document.getElementById("Amount").appendChild(amountRow);
// }
