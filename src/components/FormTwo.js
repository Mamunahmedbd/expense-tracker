import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeTransaction,
  editInActive,
} from "../features/transaction/transactionSlice";

export default function Form({ setResetModal }) {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [amount, setAmount] = useState(Number());

  const dispatch = useDispatch();
  const { isLoading, isError } = useSelector((state) => state.transaction);
  const { editing } = useSelector((state) => state.transaction) || {};

  // listen for edit mode active
  useEffect(() => {
    const { id, name, amount, type } = editing || {};
    if (id) {
      setName(name);
      setType(type);
      setAmount(amount);
    } else {
      reset();
    }
  }, [editing]);

  const reset = () => {
    setName("");
    setType("");
    setAmount("");
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      changeTransaction({
        id: editing?.id,
        data: {
          name: name,
          amount: Number(amount),
          type: type,
        },
      })
    );
    reset();
    dispatch(editInActive());
    setResetModal(false);
  };

  const cancelEditMode = () => {
    reset();
    setResetModal(false);
    dispatch(editInActive());
  };

  return (
    <div className="form">
      <h3>Add new transaction</h3>

      <form onSubmit={handleUpdate}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="enter title"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group radio">
          <label>Type</label>
          <div className="radio_group">
            <input
              required
              type="radio"
              value="income"
              name="type"
              id="income_by_edit"
              checked={type === "income"}
              onChange={(e) => setType("income")}
            />
            <label htmlFor="income_by_edit">Income</label>
          </div>
          <div className="radio_group">
            <input
              type="radio"
              value="expense"
              name="type"
              id="expense_by_edit"
              placeholder="Expense"
              checked={type === "expense"}
              onChange={(e) => setType("expense")}
            />
            <label htmlFor="expense_by_edit">Expense</label>
          </div>
        </div>

        <div className="form-group">
          <label>Amount</label>
          <input
            type="number"
            required
            placeholder="Enter amount"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <button disabled={isLoading} className="btn" type="submit">
          Update Transaction
        </button>

        {!isLoading && isError && (
          <p className="error">There was an error occured</p>
        )}
      </form>

      <button className="btn cancel_edit" onClick={cancelEditMode}>
        Cancel Edit
      </button>
    </div>
  );
}
