import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";




export const projectsApi = createApi({
    reducerPath: 'projectsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://next-portfolio-server-phi.vercel.app' }),
    endpoints: (builder) => ({
        getProjects: builder.query({
            query: () => '/projects'
        })
    })
})


export const { useGetProjectsQuery } = projectsApi;