import { createSlice } from '@reduxjs/toolkit';
import { fetchComments } from './ActionCreators';

const initialState = {
	comments: [],
	isLoadingComments: false,
	error: '',
};

export const commentsSlice = createSlice({
	name: 'comments',
	initialState,
	reducers: {},
	extraReducers: {
		[fetchComments.pending.type]: (state) => {
			state.isLoadingComments = true;
		},
		[fetchComments.fulfilled.type]: (state, action) => {
			state.isLoadingComments = false;
			state.error = '';
			state.comments = action.payload;
		},
		[fetchComments.rejected.type]: (state, action) => {
			state.isLoadingComments = false;
			state.error = action.payload;
		},
	},
});

export default commentsSlice.reducer;
