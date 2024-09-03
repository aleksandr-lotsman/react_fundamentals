import { ApiResponse } from '../types/ApiResponse';
import { User } from '../types/User';
import { FormSubmitErrors } from '../types/FormSubmitErrors';
import { Course } from '../types/Course';

const BASE_URL = 'http://localhost:4000';

export const register = async (
	userData: User,
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
	userData: User,
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
