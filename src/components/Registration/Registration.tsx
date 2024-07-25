import React, {useState} from 'react';
import {Input} from '../../common/Input';
import {User} from '../../types/User';
import {FormSubmitErrors} from '../../types/FormSubmitErrors';

import './Registration.css';
import {Link, useNavigate} from 'react-router-dom';
import {Button} from '../../common/Button';
import {isUserDataValid} from "../../helpers/isUserDataValid";
import * as apiService from '../../api/ApiService';

const Registration = () => {
	const [userData, setUserDataData] = useState<User>({
		name: '',
		email: '',
		password: '',
	});
	const [errors, setErrors] = useState<FormSubmitErrors>({});
	const navigate = useNavigate();

	const handleChange = (e) => {
		setUserDataData({...userData, [e.target.name]: e.target.value});
		setErrors({...errors, [e.target.name]: ''});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!isUserDataValid(userData, setErrors)) {
			console.error('Invalid user data');
			return;
		}

		const result = await apiService.register(userData, setErrors);
		if (!result.successful && result.errors) {
			const newErr = {};
			result.errors.forEach((msg) => {
				const key = msg.match(/'([^']+)'/)[1];
				newErr[key] = msg.replace(`'${key}'`, '');
			});
			setErrors(newErr);
			return;
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
				<Button type={'submit'} text={'REGISTER'}/>
				<Link to={'/login'}>
					If you have and account you may <strong>Login</strong>
				</Link>
			</form>
		</div>
	);
};

export default Registration;
