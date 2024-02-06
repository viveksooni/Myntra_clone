import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemSlice";
import bagSlice from "./bagSlice";
import Fetchslice from "./fetchSlice";

const store = configureStore({
  reducer: {
    items: itemSlice.reducer,
    bag: bagSlice.reducer,
    fetchStatus: Fetchslice.reducer,
  },
});

export default store;
