import { Course } from '../../types/Course';

type RootState = {
	courses: Course[];
};
export const getCourses = (state: RootState) => state.courses;
