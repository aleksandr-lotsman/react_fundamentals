import { Course } from '../../types/Course';
import { CoursesAction, CoursesActionTypes } from './types';

const initCoursesState = [] as Course[];

export const coursesReducer = (
	state = initCoursesState,
	{ type, payload }: CoursesAction
): Course[] => {
	switch (type) {
		case CoursesActionTypes.SAVE_COURSES:
			return payload;
		case CoursesActionTypes.ADD_COURSE:
			return [...state, payload];
		case CoursesActionTypes.DELETE_COURSE:
			return state.filter((course) => course.id !== payload);
		case CoursesActionTypes.UPDATE_COURSE:
			return state.map((course) =>
				course.id === payload.id ? payload : course
			);
		default:
			return state;
	}
};
