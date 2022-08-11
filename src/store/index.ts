import { configureStore } from "@reduxjs/toolkit";
import fetchVideoReducer from "./duck/fetchVideo";

const myStore = configureStore({
  reducer: {
    video: fetchVideoReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof myStore.getState>;
export type AppDispatch = typeof myStore.dispatch;

export default myStore;
