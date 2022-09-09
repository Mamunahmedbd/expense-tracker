import axios from "../../components/utils/axios";

export const getTransactions = async ({ filter, search }) => {
  let queryString = "";
  if (filter.length > 0) {
    queryString += `type_like=${filter}&`;
  }
  if (search.length !== 0) {
    queryString += `name_like=${search}`;
  }
  const response = await axios.get(`/transactions?${queryString}`);

  return response.data;
};

export const addTransaction = async (data) => {
  const response = await axios.post("/transactions", data);

  return response.data;
};

export const editTransaction = async (id, data) => {
  const response = await axios.put(`/transactions/${id}`, data);

  return response.data;
};

export const deleteTransaction = async (id) => {
  const response = axios.delete(`/transactions/${id}`);

  return response.data;
};
