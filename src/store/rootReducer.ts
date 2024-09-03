import { coursesReducer } from './courses/reducer';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
	courses: coursesReducer,
});
