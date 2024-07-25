import React, { useState } from 'react';
import { Input } from '../../common/Input';
import { User } from '../../types/User';

import './Registration.css';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../common/Button';
import { BASE_URL } from '../../constants';

type RegisterResponse = {
	successful: boolean;
	result?: string;
	errors?: string[];
};

type Errors = {
	name?: string;
	email?: string;
	password?: string;
	requestError?: string;
};

const signInFields = ['name', 'email', 'password'];

const Registration = () => {
	const [userData, setUserDataData] = useState<User>({
		name: '',
		email: '',
		password: '',
	});
	const [errors, setErrors] = useState<Errors>({});
	const navigate = useNavigate();

	const isUserDataValid = (): boolean => {
		const newErrors: Errors = {};

		signInFields.forEach((field) => {
			if (!userData[field]) {
				newErrors[field] =
					`${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
			}
		});
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleChange = (e) => {
		setUserDataData({ ...userData, [e.target.name]: e.target.value });
		setErrors({ ...errors, [e.target.name]: '' });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!isUserDataValid()) {
			console.error('Invalid user data');
			return;
		}
		try {
			const response = await fetch(`${BASE_URL}/register`, {
				method: 'POST',
				body: JSON.stringify(userData),
				headers: {
					'Content-Type': 'application/json',
				},
			});

			const result: RegisterResponse = await response.json();
			if (!result.successful && result.errors) {
				const newErr = {};
				result.errors.forEach((msg) => {
					const key = msg.match(/'([^']+)'/)[1];
					newErr[key] = msg.replace(`'${key}'`, '');
				});
				setErrors(newErr);
				return;
			}
			console.log('User registered', result);
		} catch (e) {
			console.error('User registration failed', e);
			setErrors({ ...errors, requestError: 'User registration failed' });
		}
		navigate('/login');
	};

	return (
		<div className='registration'>
			<h2>Registration</h2>
			<form className='registration-form' onSubmit={handleSubmit}>
				<Input
					className={`${errors.name ? 'error' : ''}`}
					name='Name'
					type='text'
					placeholder='Your name'
					onChange={handleChange}
					error={errors.name}
				/>
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
				<Button type={'submit'} text={'REGISTER'} />
				<Link to={'/login'}>
					If you have and account you may <strong>Login</strong>
				</Link>
			</form>
		</div>
	);
};

export default Registration;
