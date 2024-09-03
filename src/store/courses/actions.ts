import { Course } from '../../types/Course';
import { CoursesActionTypes } from './types';

type AddNewCourseAction = {
	type: CoursesActionTypes.ADD_COURSE;
	payload: Course;
};
export const addNewCourseAction = (courseData: Course): AddNewCourseAction => ({
	type: CoursesActionTypes.ADD_COURSE,
	payload: courseData,
});

type DeleteCourseAction = {
	type: CoursesActionTypes.DELETE_COURSE;
	payload: string;
};

export const deleteCourseAction = (courseId: string): DeleteCourseAction => ({
	type: CoursesActionTypes.DELETE_COURSE,
	payload: courseId,
});

type SaveCoursesAction = {
	type: CoursesActionTypes.SAVE_COURSES;
	payload: Course[];
};

export const saveCoursesAction = (courses: Course[]): SaveCoursesAction => ({
	type: CoursesActionTypes.SAVE_COURSES,
	payload: courses,
});

type UpdateCourseAction = {
	type: CoursesActionTypes.UPDATE_COURSE;
	payload: Course;
};

export const updateCourseAction = (courseData: Course): UpdateCourseAction => ({
	type: CoursesActionTypes.UPDATE_COURSE,
	payload: courseData,
});
