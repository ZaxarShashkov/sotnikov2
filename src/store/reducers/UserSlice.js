import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from './ActionCreators';

const initialState = {
	users: [],
	isLoading: false,
	error: '',
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: {
		[fetchUsers.pending.type]: (state) => {
			state.isLoading = true;
		},
		[fetchUsers.fulfilled.type]: (state, action) => {
			state.isLoading = false;
			state.error = '';
			state.users = action.payload;
		},
		[fetchUsers.rejected.type]: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
	},
});

export default userSlice.reducer;
