import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { User } from '../../types/User';
import { FormSubmitErrors } from '../../types/FormSubmitErrors';

import { Input } from '../../common/Input';
import { Button } from '../../common/Button';

import './Login.css';

import { isDataValid } from '../../helpers/isDataValid';
import * as apiService from '../../api/ApiService';
import { ApiResponse } from '../../types/ApiResponse';

const Login = () => {
	const token = JSON.parse(localStorage.getItem('token'));
	const [userData, setUserData] = useState<User>({
		email: '',
		password: '',
	});
	const [errors, setErrors] = useState<FormSubmitErrors>({});
	const navigate = useNavigate();

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
		if (!isDataValid<User, FormSubmitErrors>(userData, setErrors)) {
			console.error('Invalid user data');
			return;
		}
		const responseBody: ApiResponse = await apiService.login(
			userData,
			setErrors
		);
		if (!responseBody.successful && responseBody.errors) {
			const newErr = {};
			responseBody.errors.forEach((msg) => {
				const key = msg.match(/'([^']+)'/)[1];
				newErr[key] = msg.replace(`'${key}'`, '');
			});
			setErrors(newErr);
			return;
		}
		const token = responseBody.result;
		const user: User = responseBody.user;
		localStorage.setItem('token', JSON.stringify(token));
		localStorage.setItem('name', user.name);
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
