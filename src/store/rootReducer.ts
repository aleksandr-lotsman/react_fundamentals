import { coursesReducer } from './courses/coursesSlice';
import { combineReducers } from '@reduxjs/toolkit';
import { authorsReducer } from './authors/authorsSlice';
import { userReducer } from './user/userSlice';

export const rootReducer = combineReducers({
	courses: coursesReducer,
	user: userReducer,
	authors: authorsReducer,
});
