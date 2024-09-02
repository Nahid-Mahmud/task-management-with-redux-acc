import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./features/tasks/tasksSlice";
import userReducer from "./features/user/userSlice";

const store = configureStore({
  reducer: { taskSlice: taskReducer, userSlice: userReducer },
});

export default store;
