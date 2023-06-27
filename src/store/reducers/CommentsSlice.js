import { createSlice } from '@reduxjs/toolkit';
import { fetchComments } from './ActionCreators';

const initialState = {
	comments: [],
	isLoading: false,
	error: '',
};

export const commentsSlice = createSlice({
	name: 'comments',
	initialState,
	reducers: {},
	extraReducers: {
		[fetchComments.pending.type]: (state) => {
			state.isLoading = true;
		},
		[fetchComments.fulfilled.type]: (state, action) => {
			state.isLoading = false;
			state.error = '';
			state.comments = action.payload;
		},
		[fetchComments.rejected.type]: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
	},
});

export default commentsSlice.reducer;
