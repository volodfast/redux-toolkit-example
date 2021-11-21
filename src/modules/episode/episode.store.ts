import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// interfaces
import { Episode } from './episode.interface';

export const episodeApi = createApi({
  reducerPath: 'episodeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
  endpoints: (builder) => ({
    getEpisodeList: builder.query({
      query: () => `episode`,
    }),
  }),
});

export const { useGetEpisodeListQuery } = episodeApi;
