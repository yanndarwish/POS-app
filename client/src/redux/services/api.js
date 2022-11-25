import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import store from "../store/store"

export const api = createApi({
	reducerPath: "loginApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "http://localhost:4001/",
		prepareHeaders: (headers) => {
			const token = store.getState().login?.token
            console.log(token)
			if (token) {
                console.log(headers)
				headers.set("x-access-token", token)
				return headers
			}
			return headers
		},
	}),
	tagTypes: ["Profile"],
	endpoints: (builder) => ({
		getAuth: builder.mutation({
			query: (payload) => ({
				url: "login",
				method: "POST",
				body: payload,
			}),
		}),
		getProfile: builder.query({
			query: () => ({
				url: "profile",
				method: "GET",
			}),
			providesTags: ["Profile"],
		}),
	}),
})

export const { useGetAuthMutation, useGetProfileQuery } = api
export default api
