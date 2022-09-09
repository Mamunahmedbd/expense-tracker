import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  incomeAndExpense,
  resetFilter,
  searchField,
} from "../features/filter/filterSlice";

export default function Filter() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(incomeAndExpense(type));
  }, [dispatch, type]);
  const handleFilter = (e) => {
    e.preventDefault();
    dispatch(searchField(name));
    setName("");
  };
  const handleReset = () => {
    dispatch(resetFilter());
    setType("");
    setName("");
  };
  return (
    <div className="form">
      <form onSubmit={handleFilter}>
        <div className="form-group radio">
          <label>Filter</label>
          <div className="radio_group">
            <input
              type="radio"
              value="income"
              name="type"
              id="income_type_filter"
              checked={type === "income"}
              onChange={() => setType("income")}
            />
            <label htmlFor="income_type_filter">Income</label>
          </div>
          <div className="radio_group">
            <input
              type="radio"
              value="expense"
              name="type"
              id="expense_type_filter"
              placeholder="Expense"
              checked={type === "expense"}
              onChange={() => setType("expense")}
            />
            <label htmlFor="expense_type_filter">Expense</label>
          </div>
        </div>
        <div className="form-group">
          <input
            type="search"
            name="name"
            placeholder="Search"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="">
            Search
          </button>
        </div>
        <div>
          <button type="reset" onClick={handleReset} className="btn">
            RESET ALL
          </button>
        </div>
      </form>
    </div>
  );
}
