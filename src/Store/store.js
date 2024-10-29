import { configureStore } from "@reduxjs/toolkit";
import tokenSlice from "../fetch/todos";

const store = configureStore({
  reducer: {
    token: tokenSlice,
  },
});

export default store;
