// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:1337/api/' }),
  endpoints: (builder) => ({
    getVideoById: builder.query({
      query: (id) => `videos/${id}`,
      transformResponse: (response) => response.data,
    }),
    getVideos: builder.query({
        query: () => `videos/`,
      transformResponse: (response) => response.data,

      }),
    
    

  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetVideoByIdQuery, useGetVideosQuery } = api