import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pageNumber: 1,
  search: "",
  status: "",
  gender: "",
  residence: "",
  filteredDataCount: 0,
  totalPages: 0,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setPageNumber: (state, action) => {
      state.pageNumber = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setGender: (state, action) => {
      state.gender = action.payload;
    },
    setResidence: (state, action) => {
      state.residence = action.payload;
    },
    setFilteredData: (state, action) => {
      state.filteredDataCount = action.payload;
    },
    setTotalPages: (state, action) => {
      state.totalPages = action.payload;
    },
    clearFilters: (state) => {
      state.pageNumber = 1;
      state.search = "";
      state.status = "";
      state.gender = "";
      state.residence = "";
      state.filteredDataCount = 0;
      state.totalPages = 0;
    },
  },
});

export const {
  setPageNumber,
  setSearch,
  setStatus,
  setGender,
  setResidence,
  setFilteredData,
  setTotalPages,
  clearFilters,
} = filtersSlice.actions;
export default filtersSlice.reducer;
