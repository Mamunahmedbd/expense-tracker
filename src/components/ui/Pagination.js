import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentPage } from "../../features/filter/filterSlice";

export default function Pagination() {
  const { transactions } = useSelector((state) => state.transaction);
  const { postPerPage, currentPage } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  let pages = [];

  for (let i = 1; i <= Math.ceil(transactions.length / postPerPage); i++) {
    pages.push(i);
  }
  const handleCurrentPage = (getPage) => {
    dispatch(getCurrentPage(getPage));
  };

  return (
    <div className="pagination">
      {pages.map((page, index) => (
        <button
          key={index}
          onClick={() => handleCurrentPage(page)}
          className={`${currentPage === page ? "active" : "color_button"}`}
        >
          {page}
        </button>
      ))}
    </div>
  );
}
