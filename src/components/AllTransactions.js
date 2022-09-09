import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransactions } from "../features/transaction/transactionSlice";
import Filter from "./Filter";
import SingleTransaction from "./SingleTransaction";
import Pagination from "./ui/Pagination";

export default function Transactions() {
  const dispatch = useDispatch();
  const { transactions, isLoading, isError } = useSelector(
    (state) => state.transaction
  );
  const { filter, search, currentPage, postPerPage } = useSelector(
    (state) => state.filter
  );
  useEffect(() => {
    dispatch(fetchTransactions({ filter, search }));
  }, [dispatch, filter, search]);

  const lastIndex = currentPage * postPerPage;
  const firstIndex = lastIndex - postPerPage;

  // const filterBySearch = () => {
  //   if (search.length > 0) {
  //     // return search.toLowerCase().includes(transaction?.name.toLowerCase());
  //     return search.includes(transactions?.name);
  //   }
  //   return true;
  // };
  // const filterByType = (transaction) => {
  //   if (filter.length > 0) {
  //     return filter.includes(transaction?.type);
  //   }
  //   return true;
  // };

  let content = null;
  if (isLoading) content = <p>Loading...</p>;
  if (!isLoading && isError) content = <p>There was some occurs</p>;
  if (!isLoading && !isError && transactions?.length > 0) {
    content = transactions
      .slice(firstIndex, lastIndex)
      .map((transac) => (
        <SingleTransaction key={transac.id} transaction={transac} />
      ));
  }
  if (!isLoading && !isError && transactions?.length === 0) {
    content = <p>no transaction found</p>;
  }
  return (
    <>
      <Filter />
      <p className="second_heading">Your Transactions:</p>
      <div className="conatiner_of_list_of_transactions">
        <ul>{content}</ul>
      </div>
      <Pagination />
    </>
  );
}
