import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  authUser: {},
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state) => state,
  },
});

export const { login } = loginSlice.actions;

export default loginSlice.reducer;
