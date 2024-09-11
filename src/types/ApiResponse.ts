import { Course } from './Course';
import { Author } from './Author';
import {User} from "./User";

type LoggedUser = {
	name: string;
	email: string;
};

export type ApiResponse<T = Course[] | Author[] | User | string> = {
	successful: boolean;
	result?: T;
	user?: LoggedUser;
	errors?: string[];
};
