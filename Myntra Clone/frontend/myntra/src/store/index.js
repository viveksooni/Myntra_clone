import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemSlice";
import bagSlice from "./bagSlice";

const store = configureStore({
  reducer: { items: itemSlice.reducer, bag: bagSlice.reducer },
});

export default store;
