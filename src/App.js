import React from "react";
import Home from "./page/Home";
import AllTransactions from "./page/TransactionsPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listing" element={<AllTransactions />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
