import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./features/tasks/tasksSlice";

const store = configureStore({
  reducer: taskReducer,
});

export default store;
