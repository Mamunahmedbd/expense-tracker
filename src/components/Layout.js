import React from "react";
import { NavLink } from "react-router-dom";

export default function layout({ children }) {
  return (
    <div className="App">
      <div className="header">
        <NavLink to="/">
          <h1 className="link">Expense Tracker</h1>
        </NavLink>
      </div>
      <div className="main">
        <div className="container">{children}</div>
      </div>
      <div className="footer">&copy;2022 Learn with Sumit</div>
    </div>
  );
}
