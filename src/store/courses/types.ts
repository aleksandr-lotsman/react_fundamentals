import { Course } from '../../types/Course';

export const enum CoursesActionTypes {
	SAVE_COURSES = 'SAVE_COURSES',
	ADD_COURSE = 'ADD_COURSE',
	DELETE_COURSE = 'DELETE_COURSES',
	UPDATE_COURSE = 'UPDATE_COURSE',
}

interface SaveCourses {
	type: CoursesActionTypes.SAVE_COURSES;
	payload: Course[];
}

interface AddCourse {
	type: CoursesActionTypes.ADD_COURSE;
	payload: Course;
}

interface DeleteCourse {
	type: CoursesActionTypes.DELETE_COURSE;
	payload: string;
}

interface UpdateCourse {
	type: CoursesActionTypes.UPDATE_COURSE;
	payload: Course;
}

export type CoursesAction =
	| SaveCourses
	| AddCourse
	| DeleteCourse
	| UpdateCourse;
