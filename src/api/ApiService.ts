import { ApiResponse } from '../types/ApiResponse';
import { FormSubmitErrors } from '../types/FormSubmitErrors';
import { Course } from '../types/Course';
import { Author } from '../types/Author';
import {User} from "../types/User";

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
		console.log('UserState registered', result);
		return result;
	} catch (e) {
		console.error('UserState registration failed', e);
		setErrors({ requestError: 'UserState registration failed' });
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

		const result: ApiResponse<string> = await response.json();
		console.log('UserState logged in', result);
		return result;
	} catch (e) {
		console.error('UserState log in failed', e);
		setErrors({ requestError: 'UserState log in failed' });
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

export const getUser = async (token: string) => {
	try {
		const response = await fetch(`${BASE_URL}/users/me`, {
			method: 'GET',
			headers: {
				'accept': '*/*',
				Authorization: `Bearer ${token}`
			},
		});

		const result: ApiResponse<User> = await response.json();
		console.log('UserState fetched', result);
		return result;
	} catch (e) {
		console.error('UserState fetching failed', e);
	}
}

export const logOut = async (token: string) => {
	try {
		const response = await fetch(`${BASE_URL}/logout`, {
			method: 'DELETE',
			headers: {
				'accept': '*/*',
				Authorization: `Bearer ${token}`
			},
		})
		let result = false
		if (response.ok) {
			result = true
		}
		return result;
	} catch (e) {
		console.error('UserState log out failed', e);
	}
}

