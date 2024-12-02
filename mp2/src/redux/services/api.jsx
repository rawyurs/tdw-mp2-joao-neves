import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://stranger-things-api.fly.dev/api/v1/",
  }),
  endpoints: (builder) => ({
    getCharacters: builder.query({
      query: ({ perPage, page, search, status, gender, residence }) => {
        let query = [];
        if (search) query.push(`name=${search}`);
        if (status) query.push(`status=${status}`);
        if (gender) query.push(`gender=${gender}`);
        if (residence) query.push(`residence=${residence}`);
        query.push(`perPage=${perPage}`);
        query.push(`page=${page}`);
        return `characters?${query.join("&")}`;
      },
    }),
    getCharacterById: builder.query({
      query: (id) => `characters/${id}`,
    }),
    getCharactersByEpisode: builder.query({
      query: (id) => `characters?appearsInEpisodes=${id}`,
    }),
  }),
});

export const {
  useGetCharactersQuery,
  useGetCharacterByIdQuery,
  useGetCharactersByEpisodeQuery,
} = api;
