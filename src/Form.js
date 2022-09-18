import React from "react";

function Form(props) {
  return (
    <div class="d-flex justify-content-center">
      <form onSubmit={props.handleSubmit}>
        <div className="form-group row">
          <label className="col-sm-4 col-form-label">Payment</label>
        </div>
        <div className="col-sm-12">
          <input
            type="text"
            name="option"
            value={props.form.option}
            onChange={props.updateForm}
            placeholder="Payment"
            required
            className="form-control"
          />
        </div>
        <div className="form-group row">
          <label className="col-sm-4 col-form-label">Expense</label>
        </div>
        <div className="col-sm-12">
          <input
            type="text"
            name="expenseName"
            value={props.form.expenseName}
            onChange={props.updateForm}
            required
            placeholder="Expense"
            className="form-control"
          />
        </div>
        <div className="form-group row">
          <label className="col-sm-4 col-form-label">Date</label>
        </div>
        <div class="col-sm-12">
          <input
            type="date"
            name="date"
            value={props.form.date}
            onChange={props.updateForm}
            required
            className="form-control"
          />
        </div>
        <div className="form-group row">
          <label className="col-sm-4 col-form-label">Amount</label>
        </div>
        <div className="col-sm-12">
          <input
            type="number"
            name="amount"
            value={props.form.amount}
            onChange={props.updateForm}
            required
            number
            placeholder="Amount"
            step="any"
            className="form-control"
          />
        </div>
        <button id="submit" type="submit" class="btn btn-outline-success">
          Add Expenses
        </button>
      </form>
    </div>
  );
}

export default Form;
