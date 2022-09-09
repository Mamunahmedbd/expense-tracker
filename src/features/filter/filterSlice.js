import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "",
  search: "",
  postPerPage: 10,
  currentPage: 1,
};

const filterReducer = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    searchField: (state, action) => {
      state.search = action.payload;
      state.currentPage = 1;
    },
    incomeAndExpense: (state, action) => {
      state.filter = action.payload;
      state.currentPage = 1;
    },
    resetFilter: (state, action) => {
      state.filter = "";
      state.search = "";
      state.currentPage = 1;
    },
    getCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export default filterReducer.reducer;
export const { searchField, incomeAndExpense, resetFilter, getCurrentPage } =
  filterReducer.actions;
