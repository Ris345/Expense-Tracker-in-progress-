import { FaTrashAlt } from "react-icons/fa";

const Table = (props) => {
  debugger; 
  const handleRemove = (id) => {
    const items = props.expenses.filter((expense) => expense.id !== id);
    props.setExpenses(items);
  };

  const expenseRows = props.expenses.map((expense, index) => {
    return (
      <tr key={expense.id}>
        <td>{expense.payment}</td>
        <td>{expense.items}</td>
        <td>{expense.date}</td>
        <td>${expense.amount}</td>
        <td>
          <button
            className="btn btn-outline-danger"
            onClick={() => handleRemove(expense.id)}
          >
            <FaTrashAlt />
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <table className="table table-striped table-hover table-sm">
        <thead>
          <tr>
            <th id="Type">Payment</th>
            <th id="Name">Expense</th>
            <th id="Date">Date</th>
            <th id="Amount">Amount</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>{expenseRows}</tbody>
      </table>
    </div>
  );
};

export default Table;
