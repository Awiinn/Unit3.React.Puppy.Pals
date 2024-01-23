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

// import { createSlice } from "@reduxjs/toolkit";
// import { api } from "../api/api";

// const allPlayersSlice = createSlice({
//   name: "player",
//   initialState: {
//     players: [],
//     searchQuery: "",
//   },
//   reducers: {
//     setSearchQuery: (state, action) => {
//       state.searchQuery = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addMatcher(
//       api.endpoints.getAllPlayers.matchFulfilled,
//       (state, { payload }) => {
//         state.players = payload.data.players;
//       }
//     );
//   },
// });

// export const { setSearchQuery } = allPlayersSlice.actions;
// export const selectPlayers = (state) => state.player.players;
// export const selectSearchQuery = (state) => state.player.searchQuery;

// export default allPlayersSlice.reducer;
