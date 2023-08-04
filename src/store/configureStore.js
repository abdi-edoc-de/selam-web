import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./reducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import apiCall from "./middleware/apiCall";
const persistConfig = {
  key: "root2",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);
const configureSt = () =>
  configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware : [
      ...getDefaultMiddleware(),
      apiCall
    ]
  });
  export default configureSt