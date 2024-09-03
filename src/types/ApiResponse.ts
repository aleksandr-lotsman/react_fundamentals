import { User } from './User';
import { Course } from './Course';
import { Author } from './Author';

export type ApiResponse<T = Course[] | Author[] | string> = {
	successful: boolean;
	result?: T;
	user?: User;
	errors?: string[];
};
