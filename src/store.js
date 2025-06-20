import { configureStore } from "@reduxjs/toolkit";
import appReducers from "./Slices/appSlice";
import searchReducers from "./Slices/searchSlice";
import chatReducers from "./Slices/liveChatSlice";
const store = configureStore({
  reducer: {
    app: appReducers,
    search: searchReducers,
    chat: chatReducers,
  },
});

export default store;
