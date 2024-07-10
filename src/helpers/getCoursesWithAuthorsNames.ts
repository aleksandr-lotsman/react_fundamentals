import {Course} from "../types/Course";
import {Author} from "../types/Author";

import {getAuthorNameById} from "./getAuthorNameById";

export const getCoursesWithAuthorsNames = (courses: Course[], authors: Author[]) => {
	return courses.map(course => ({
		...course,
		authors: course.authors.map(authorId => getAuthorNameById(authorId, authors))
	}));
}