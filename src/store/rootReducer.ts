import { coursesReducer } from './courses/reducer';
import { combineReducers } from '@reduxjs/toolkit';
import { userReducer } from './user/reducer';
import { authorsReducer } from './authors/reducer';

export const rootReducer = combineReducers({
	courses: coursesReducer,
	user: userReducer,
	authors: authorsReducer,
});
