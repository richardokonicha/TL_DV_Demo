// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:1337/api/' }),
  tagTypes: ['video', 'Video'],
  
  endpoints: (builder) => ({
    getVideoById: builder.query({
      query: (id) => `videos/${id}`,
      providesTags: (result, error, id) => [
          { type: 'video', id },
          { type: 'Video', id }

        
        ],
      transformResponse: (response) => response.data,
    }),
    getVideos: builder.query({
        query: () => `videos/`,
        transformResponse: (response) => response.data,
      providesTags: (result, error, id) => ['video'],


      }),

    updateVideo: builder.mutation({
        query: ({ id, data }) => ({
            url: `videos/${id}`,
            method: 'PUT',
            body: {data},
          }),
        invalidatesTags: (result, error, id) => [
            { type: 'video', id },
            { type: 'Video', id }
        ],
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetVideoByIdQuery, useGetVideosQuery, useUpdateVideoMutation } = api