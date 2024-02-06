import { createSlice } from "@reduxjs/toolkit";

const Fetchslice = createSlice({
  name: "fetchStatus",
  initialState: { isFetching: false, isFetched: false },
  reducers: {
    startedFetching: (store) => {
      store.isFetching = true;
    },
    fetchedData: (store) => {
      store.isFetched = true;
    },
    doneFetching: (store) => {
      store.isFetching = false;
    },
  },
});

export const fetchAction = Fetchslice.actions;
export default Fetchslice;
