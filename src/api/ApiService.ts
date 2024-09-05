import { ApiResponse } from '../types/ApiResponse';
import { FormSubmitErrors } from '../types/FormSubmitErrors';
import { Course } from '../types/Course';
import { Author } from '../types/Author';

const BASE_URL = 'http://localhost:4000';

export const register = async (
	userData: { name: string; email: string; password: string },
	setErrors: (errors: FormSubmitErrors) => void
) => {
	try {
		const response = await fetch(`${BASE_URL}/register`, {
			method: 'POST',
			body: JSON.stringify(userData),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const result: ApiResponse = await response.json();
		console.log('User registered', result);
		return result;
	} catch (e) {
		console.error('User registration failed', e);
		setErrors({ requestError: 'User registration failed' });
	}
};

export const login = async (
	userData: { email: string; password: string },
	setErrors: (errors: FormSubmitErrors) => void
) => {
	try {
		const response = await fetch(`${BASE_URL}/login`, {
			method: 'POST',
			body: JSON.stringify(userData),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const result: ApiResponse = await response.json();
		console.log('User logged in', result);
		return result;
	} catch (e) {
		console.error('User log in failed', e);
		setErrors({ requestError: 'User log in failed' });
	}
};

export const getCourses = async () => {
	try {
		const response = await fetch(`${BASE_URL}/courses/all`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const result: ApiResponse<Course[]> = await response.json();
		console.log('Courses fetched', result);
		return result;
	} catch (e) {
		console.error('Courses fetching failed', e);
	}
};

export const getAuthors = async () => {
	try {
		const response = await fetch(`${BASE_URL}/authors/all`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const result: ApiResponse<Author[]> = await response.json();
		console.log('Authors fetched', result);
		return result;
	} catch (e) {
		console.error('Authors fetching failed', e);
	}
};
