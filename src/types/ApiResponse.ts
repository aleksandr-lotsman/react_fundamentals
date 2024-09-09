import { Course } from './Course';
import { Author } from './Author';

type User = {
	name: string;
	email: string;
};

export type ApiResponse<T = Course[] | Author[] | string> = {
	successful: boolean;
	result?: T;
	user?: User;
	errors?: string[];
};
