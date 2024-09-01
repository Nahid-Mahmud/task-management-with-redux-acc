import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      id: 1,
      title: "Create Quarterly Report",
      description:
        "Compile and analyze sales data for Q2, draft the report, and prepare a presentation for the management meeting.",
      deadline: "2024-09-17",
      assignTo: "Jane Doe",
      priority: "Medium",
      status: "",
    },
  ],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      // add id to the payload
      if (state.tasks.length === 0) {
        state?.tasks?.push({ id: 1, status: "pending", ...payload });
      } else {
        const lastElemt = state?.tasks?.at(-1);
        state?.tasks?.push({ id: lastElemt.id + 1, status: "pending", ...payload });
      }
    },
    removeTask: (state, { payload }) => {
      state.tasks = state?.tasks?.filter((task) => task?.id !== payload);
    },
    updateStatus: (state, { payload }) => {
      const task = state?.tasks?.find((task) => task?.id === payload?.id);
      task.status = payload?.status;
    },
  },
});

export const { addTask, removeTask, updateStatus } = tasksSlice.actions;

export default tasksSlice.reducer;
