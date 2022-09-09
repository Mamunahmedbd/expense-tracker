import React, { useState } from "react";
import { useDispatch } from "react-redux";
import deleteImage from "../assets/images/delete.svg";
import editImage from "../assets/images/edit.svg";
import {
  editActive,
  removeTransaction,
} from "../features/transaction/transactionSlice";
// import AllTransactionForm from "./AllTransactionForm";
import FormTwo from "./FormTwo";

export default function Transaction({ transaction }) {
  const { name, amount, type, id } = transaction || {};
  const [resetModal, setResetModal] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeTransaction(id));
  };
  const handleEditActive = () => {
    dispatch(editActive(transaction));
    setResetModal(true);
  };

  return (
    <>
      <li className={`transaction ${type}`}>
        <p>{name}</p>
        <div className="right">
          <p>৳ {amount}</p>
          <button className="link" onClick={() => handleDelete(id)}>
            <img alt="" className="icon" src={deleteImage} />
          </button>
          <button className="link" onClick={handleEditActive}>
            <img alt="" className="icon" src={editImage} />
          </button>
        </div>
      </li>
      {resetModal && <FormTwo setResetModal={setResetModal} />}
    </>
  );
}
