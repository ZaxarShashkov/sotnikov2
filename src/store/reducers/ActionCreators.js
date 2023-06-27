import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk('post/fetchAll', async (_, thunkApi) => {
	try {
		const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
		return response.data;
	} catch (e) {
		return thunkApi.rejectWithValue('error');
	}
});

export const fetchUsers = createAsyncThunk('user/fetchAll', async (_, thunkApi) => {
	try {
		const responseUser = await axios.get('https://jsonplaceholder.typicode.com/users');
		return responseUser.data;
	} catch (e) {
		return thunkApi.rejectWithValue('error');
	}
});

export const fetchComments = createAsyncThunk('comments/fetchAll', async (_, thunkApi) => {
	try {
		const responseComments = await axios.get('https://jsonplaceholder.typicode.com/comments');
		return responseComments.data;
	} catch (e) {
		return thunkApi.rejectWithValue('error');
	}
});
