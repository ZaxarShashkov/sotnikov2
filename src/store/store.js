import { combineReducers, configureStore } from '@reduxjs/toolkit';
import postReducer from './reducers/PostSlice';
import userReducer from './reducers/UserSlice';
import commentsReducer from './reducers/CommentsSlice';

const rootReducer = combineReducers({
	postReducer,
	userReducer,
	commentsReducer,
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
	});
};
