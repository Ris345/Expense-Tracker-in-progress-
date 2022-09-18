import "./Expense.css";
import Header from "./Header";
import Table from "./Table";
import { useState, useEffect } from "react";
import Form from "./Form";

export default function Main(props) {
  const [form, setForm] = useState({
    expenseName: "",
    option: "",
    date: "",
    amount: "",
  });
  const [expenses, setExpenses] = useState([]);

  function addExpense() {
    setExpenses((prevExpenses) => {
      return [
        ...prevExpenses,
        {
          id: Math.random(),
          payment: form.option,
          items: form.expenseName,
          date: form.date,
          amount: form.amount,
        },
      ];
    });
  }

  useEffect(() => {
    const expenseData = localStorage.getItem("expense-list");
    if (expenseData) {
      setExpenses(JSON.parse(expenseData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("expense-list", JSON.stringify(expenses));
  }, [expenses]);

  function updateForm(e) {
    setForm((prevForm) => {
      return {
        ...prevForm,
        [e.target.name]: e.target.value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    addExpense();
    setForm({
      option: "",
      expenseName: "",
      date: "",
      amount: "",
    });
  }

  return (
    <div>
      <Header />
      <Form handleSubmit={handleSubmit} form={form} updateForm={updateForm} />
      <Table
        handleSubmit={handleSubmit}
        expenses={expenses}
        setExpenses={setExpenses}
      />
    </div>
  );
}
