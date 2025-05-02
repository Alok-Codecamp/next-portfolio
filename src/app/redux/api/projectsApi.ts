import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";




export const projectsApi = createApi({
    reducerPath: 'projectsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://next-portfolio-server-phi.vercel.app' }),
    endpoints: (builder) => ({
        getProjects: builder.query<any, void>({
            query: () => ({
                url: '/projects',
                method: 'GET'
            })
        })
    })
})


export const { useGetProjectsQuery } = projectsApi;