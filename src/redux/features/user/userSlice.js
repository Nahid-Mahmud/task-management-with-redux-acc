import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  name: "John Doe",
  email: "user@gmail.com",
  userTasks: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
