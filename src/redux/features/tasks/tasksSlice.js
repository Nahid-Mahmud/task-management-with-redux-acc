import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      // add id to the payload
      if (state.tasks.length === 0) {
        state?.tasks?.push({ id: 1, ...payload });
      } else {
        const lastElemt = state?.tasks?.at(-1);
        state?.tasks?.push({ id: lastElemt.id + 1, ...payload });
      }
    },
  },
});

export const { addTask } = tasksSlice.actions;

export default tasksSlice.reducer;
