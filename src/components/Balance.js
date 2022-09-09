import React from "react";
import { useSelector } from "react-redux";
import numberWithCommas from "./utils/ThousandSeparator";

export default function Balance() {
  const { transactions } = useSelector((state) => state.transaction);

  const calculateIncome = (transaction) => {
    let income = Number();
    transaction.forEach((trans) => {
      const { type, amount } = trans;
      if (type === "income") {
        income += amount;
      } else {
        income -= amount;
      }
    });
    return income;
  };

  return (
    <div className="top_card">
      <p>Your Current Balance</p>
      <h3>
        <span>৳</span>{" "}
        {transactions.length > 0 ? (
          <span>
            {" "}
            {numberWithCommas(
              calculateIncome(transactions).toLocaleString("en-us")
            )}{" "}
          </span>
        ) : null}
      </h3>
    </div>
  );
}
