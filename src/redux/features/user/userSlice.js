import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  name: "nahid",
  email: "user@gmail.com",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
