import { User } from './User';

export type ApiResponse = {
	successful: boolean;
	result?: string;
	user?: User;
	errors?: string[];
};
