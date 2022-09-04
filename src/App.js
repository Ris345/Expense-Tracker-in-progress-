import "./Expense.css";
import Header from "./Header";
import ExpenseBody from "./Form";
import Table from "./Table";
import React from "react";
import { useState } from "react";
import Expensebody from "./Form";

export default function Main() {
  
  return (
    <div className="Main">
      <Header />
      <ExpenseBody />
      <Table />
    </div>
  );
}


//work on getting props.
// work on getting state.
// grabbing one of the option element and displaying that in the screen.

// test case 1
// select one item
// click the add button, to check can also console.log the item...
// the add item must show on the screen.

// grab something from the input and display it on the table
//
