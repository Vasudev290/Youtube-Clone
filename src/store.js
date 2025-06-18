import { configureStore } from "@reduxjs/toolkit";
import appReducers from "./Slices/appSlice";
import searchReducers from "./Slices/searchSlice";
const store = configureStore({
  reducer: {
    app: appReducers,
    search: searchReducers,
  },
});

export default store;
