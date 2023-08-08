import { createSlice, createSelector } from "@reduxjs/toolkit";
import * as action from "./api";

const slice = createSlice({
  name: "auth",
  logedIn: false,
  initialState: {},
  reducers: {
    login: (auth, action) => {
      console.log(action.payload);
      if (
        action.payload.username === "mame" &&
        action.payload.password === "mame"
      ) {
        auth.logedIn = true;
      }
    },
  },
});

export const { login } = slice.actions;

export default slice.reducer;

export const getIsLogin = createSelector(
  (state) => state.entities.auth.logedIn,
  (logedIn) => logedIn
);
