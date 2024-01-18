import { createSlice } from "@reduxjs/toolkit";
import { api } from "../api/api";

const allPlayersSlice = createSlice({
  name: "player",
  initialState: [],
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.getAllPlayers.matchFulfilled,
      (state, { payload }) => {
        return payload.data.players;
      }
    );
  },
});

export default allPlayersSlice.reducer;
