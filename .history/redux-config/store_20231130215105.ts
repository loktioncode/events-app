import { configureStore } from "@reduxjs/toolkit";
import eventsReducer from "./eventsThunk";


export const store = configureStore({
  reducer: {
    events: eventsReducer
  },
});