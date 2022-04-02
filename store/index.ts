import { configureStore } from "@reduxjs/toolkit";
import uiReducers from "./ui-reducers";

export const store = configureStore({
  reducer: {
    ui: uiReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
