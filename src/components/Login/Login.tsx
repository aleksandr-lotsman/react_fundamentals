import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { UserState } from '../../types/UserState';
import { FormSubmitErrors } from '../../types/FormSubmitErrors';

import { Input } from '../../common/Input';
import { Button } from '../../common/Button';

import './Login.css';

import { isDataValid } from '../../helpers/isDataValid';
import * as apiService from '../../api/ApiService';
import { ApiResponse } from '../../types/ApiResponse';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../store/user/userSlice'

import * as localStorage from '../../helpers/localStorage';

type UserForm = {
	email: string;
	password: string;
};

const Login = () => {
	const token = JSON.parse(localStorage.getToken());
	const [userData, setUserData] = useState<UserForm>({
		email: '',
		password: '',
	});
	const [errors, setErrors] = useState<FormSubmitErrors>({});
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		if (token) {
			navigate('/courses');
		}
	}, []);

	const handleChange = (e) => {
		setUserData({ ...userData, [e.target.name]: e.target.value });
		setErrors({ ...errors, [e.target.name]: '' });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!isDataValid<UserForm, FormSubmitErrors>(userData, setErrors)) {
			console.error('Invalid user data');
			return;
		}
		const responseBody: ApiResponse<string> = await apiService.login(
			userData,
			setErrors
		);
		if (!responseBody.successful) {
			const newErr = {};
			responseBody.errors.forEach((msg) => {
				const key = msg.match(/'([^']+)'/)[1];
				newErr[key] = msg.replace(`'${key}'`, '');
			});
			setErrors(newErr);
			return;
		}
		const token: string = responseBody.result.replace('Bearer ', '');
		const user: UserState = {
			isAuth: true,
			name: responseBody.user.name,
			email: responseBody.user.email,
			token: token,
			role: ''
		};
		localStorage.setToken(token);
		dispatch(loginUser(user));
		navigate('/courses');
	};

	return (
		<div className='login'>
			<h2>Login</h2>
			<form className='login-form' onSubmit={handleSubmit}>
				<Input
					className={`${errors.email ? 'error' : ''}`}
					label='Email'
					name='email'
					type='text'
					placeholder='Your email'
					onChange={handleChange}
					error={errors.email}
				/>
				<Input
					className={`${errors.password ? 'error' : ''}`}
					label='Password'
					name='password'
					type='password'
					placeholder='Your password'
					onChange={handleChange}
					error={errors.password}
				/>
				<Button type={'submit'} text={'LOGIN'} />
				<Link to={'/registration'}>
					If you don't have an account you may <strong>Register</strong>
				</Link>
			</form>
		</div>
	);
};

export default Login;
