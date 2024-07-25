import React, {useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { User } from '../../types/User';
import { FormSubmitErrors } from '../../types/FormSubmitErrors';

import { Input } from '../../common/Input';
import { Button } from '../../common/Button';

import './Login.css';

import { isUserDataValid } from '../../helpers/isUserDataValid';
import * as apiService from '../../api/ApiService';
import {ApiResponse} from "../../types/ApiResponse";

const Login = () => {
	const token = JSON.parse(localStorage.getItem('token'));
	const [userData, setUserDataData] = useState<User>({
		email: '',
		password: '',
	});
	const [userToken, setUserToken] = useState(token);
	const [errors, setErrors] = useState<FormSubmitErrors>({});
	const navigate = useNavigate();

	useEffect(() => {
		if (token) {
			navigate('/courses');
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('token', JSON.stringify(userToken));
	},[userToken])

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
		const responseBody: ApiResponse = await apiService.login(userData, setErrors);
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
		setUserToken(token);
		navigate('/courses');
	};

	return (
		<div className='login'>
			<h2>Login</h2>
			<form className='login-form' onSubmit={handleSubmit}>
				<Input
					className={`${errors.email ? 'error' : ''}`}
					lable='Email'
					name='email'
					type='text'
					placeholder='Your email'
					onChange={handleChange}
					error={errors.email}
				/>
				<Input
					className={`${errors.password ? 'error' : ''}`}
					lable='Password'
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
