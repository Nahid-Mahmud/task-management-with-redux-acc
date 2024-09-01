import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./features/tasks/tasksSlice";

const store = configureStore({
  reducer: { taskSlice: taskReducer },
});

export default store;
