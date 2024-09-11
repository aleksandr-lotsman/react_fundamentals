import React from 'react';

import './Header.css';

import { Logo } from './components/Logo/Logo';
import { Button } from '../../common/Button';

import { BUTTON_TEXT_LOGOUT } from '../../constants';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from '../../store/user/selectors';
import { logoutUser } from '../../store/user/userSlice';

import * as localStorage from '../../helpers/localStorage';
import { AppDispatch } from '../../store';

const Header = () => {
	const token = localStorage.getToken();
	const navigate = useNavigate();
	const name = useSelector(getUserName);
	const dispatch: AppDispatch = useDispatch();

	const handleLogout = () => {
		dispatch(logoutUser());
		localStorage.removeItem('token');
		navigate('/login');
	};

	return (
		<header className='header'>
			<Logo />
			{token && (
				<div>
					<span>{name}</span>
					<Button text={BUTTON_TEXT_LOGOUT} onClick={handleLogout} />
				</div>
			)}
		</header>
	);
};

export default Header;
