import { configureStore } from "@reduxjs/toolkit";
import { api } from "../api/api";
import allPlayersSlice from "../components/allPlayersSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    player: allPlayersSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
