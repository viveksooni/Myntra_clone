import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addInitialItems: (store, action) => {
      console.log(action.payload);
      return [...action.payload, ...store];
    },
  },
});

export const itemAction = itemSlice.actions;
export default itemSlice;
