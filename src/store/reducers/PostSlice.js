import { createSlice } from '@reduxjs/toolkit';
import { fetchPosts } from './ActionCreators';

const initialState = {
	posts: [],
	isLoading: false,
	error: '',
};

export const postSlice = createSlice({
	name: 'post',
	initialState,
	reducers: {},
	extraReducers: {
		[fetchPosts.pending.type]: (state) => {
			state.isLoading = true;
		},
		[fetchPosts.fulfilled.type]: (state, action) => {
			state.isLoading = false;
			state.error = '';
			state.posts = action.payload;
		},
		[fetchPosts.rejected.type]: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
	},
});

export default postSlice.reducer;
