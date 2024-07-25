import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { User } from '../../types/User';
import { FormSubmitErrors } from '../../types/FormSubmitErrors';

import { Input } from '../../common/Input';
import { Button } from '../../common/Button';

import './Login.css';

import { isUserDataValid } from '../../helpers/isUserDataValid';
import * as apiService from '../../api/ApiService';

const Login = () => {
	const [userData, setUserDataData] = useState<User>({
		email: '',
		password: '',
	});
	const [errors, setErrors] = useState<FormSubmitErrors>({});
	const navigate = useNavigate();

	const handleChange = (e) => {
		setUserDataData({ ...userData, [e.target.name]: e.target.value });
		setErrors({ ...errors, [e.target.name]: '' });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!isUserDataValid(userData, setErrors)) {
			console.error('Invalid user data');
			return;
		}
		const result = await apiService.login(userData, setErrors);
		if (!result.successful && result.errors) {
			const newErr = {};
			result.errors.forEach((msg) => {
				const key = msg.match(/'([^']+)'/)[1];
				newErr[key] = msg.replace(`'${key}'`, '');
			});
			setErrors(newErr);
			return;
		}
		navigate('/courses');
	};

	return (
		<div className='login'>
			<h2>Login</h2>
			<form className='login-form' onSubmit={handleSubmit}>
				<Input
					className={`${errors.email ? 'error' : ''}`}
					name='Email'
					type='text'
					placeholder='Your email'
					onChange={handleChange}
					error={errors.email}
				/>
				<Input
					className={`${errors.password ? 'error' : ''}`}
					name='Password'
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
