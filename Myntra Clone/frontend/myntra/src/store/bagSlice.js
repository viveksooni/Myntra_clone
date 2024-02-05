import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addToBag: (store, action) => {
      if (!store.includes(action.payload)) {
        store.push(action.payload);
      }
    },
    removeItem: (store, action) => {
      const newstore = store.filter((id) => {
        return id !== action.payload;
      });
      console.log(newstore);
      return newstore;
    },
  },
});

export const bagActions = bagSlice.actions;
export default bagSlice;
