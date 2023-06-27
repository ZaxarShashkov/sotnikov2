import { combineReducers, configureStore } from '@reduxjs/toolkit';
import postReducer from './reducers/PostSlice';
import userReducer from './reducers/UserSlice';

const rootReducer = combineReducers({
	postReducer,
	userReducer,
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
	});
};
