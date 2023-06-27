import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const shazamApi = createApi({
    reducerPath: 'shazamApi',
    baseQuery: fetchBaseQuery({
      baseUrl: 'https://shazam.p.rapidapi.com/',
      prepareHeaders: (headers) => {
        headers.set('X-RapidAPI-Key','c1d427c071msh502bf3f15df3c1bp130072jsn6c39aa5d2748');
  
        return headers;
      },
    }),

        endpoints: (builder) => ({
            getTopCharts: builder.query({ query: () => 'charts/track' }),
            getSongDetails: builder.query({ query: ({ songid }) => `charts/tracks/details?track_id=${songid}` }),
            


        })
    });

export const{
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
}= shazamApi;