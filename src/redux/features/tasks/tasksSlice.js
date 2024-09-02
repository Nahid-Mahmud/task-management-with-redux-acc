import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      id: 1,
      title: "Create Quarterly Report",
      description:
        "Compile and analyze sales data for Q2, draft the report, and prepare a presentation for the management meeting.",
      deadline: "2024-09-17",
      assignTo: "nahid",
      priority: "Medium",
      status: "pending",
    },
  ],
  userTasks: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      // add id to the payload
      if (state.tasks.length === 0) {
        state.tasks.push({ id: 1, status: "pending", ...payload });
      } else {
        const lastElement = state.tasks.at(-1);
        state.tasks.push({ id: lastElement.id + 1, status: "pending", ...payload });
      }
    },
    removeTask: (state, { payload }) => {
      state.tasks = state.tasks.filter((task) => task.id !== payload);
    },
    updateStatus: (state, { payload }) => {
      const task = state.tasks.find((task) => task.id === payload.id);
      if (task) {
        task.status = payload.status;
      }
    },
    filterUserTasks: (state, { payload }) => {
      state.userTasks = state.tasks.filter((task) => task.assignTo === payload);
    },
  },
});

export const { addTask, removeTask, updateStatus, filterUserTasks } = tasksSlice.actions;

export default tasksSlice.reducer;
