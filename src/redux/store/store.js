import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "../slice/TodoSlice";

export const store = configureStore({
  reducer: {
    todosSlice: todosSlice.reducer,
  },
});
