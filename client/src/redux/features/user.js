import { createSlice } from "@reduxjs/toolkit"
import api from "../services/api"

const initialState = {
	user: {},
	users: [],
}

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addMatcher(api.endpoints.getProfile.matchFulfilled, (state, action) => {
				state.user = action.payload.user
			})
			.addMatcher(api.endpoints.getProfiles.matchFulfilled, (state, action) => {
				state.users = action.payload.users
			})
	},
})

export default userSlice.reducer
