import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fsa-puppy-bowl.herokuapp.com/api/2311-FSA-ET-WEB-FT-SF",
  }),
  endpoints: (builder) => ({
    getAllPlayers: builder.query({
      query: () => "/players",
    }),
    getSinglePlayer: builder.query({
      query: (id) => "/players/" + id,
    }),
    addNewPlayer: builder.mutation({
      query: (playerData) => ({
        url: "/players",
        method: "POST",
        body: playerData,
      }),
    }),
    deletePlayer: builder.mutation({
      query: (id) => ({
        url: "/players/" + id,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllPlayersQuery,
  useGetSinglePlayerQuery,
  useAddNewPlayerMutation,
  useDeletePlayerMutation,
} = api;
