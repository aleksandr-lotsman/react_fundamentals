import React from 'react';

import './Header.css';

import { Logo } from './components/Logo/Logo';
import { Button } from '../../common/Button';

import { BUTTON_TEXT_LOGOUT } from '../../constants';
import { useNavigate } from 'react-router-dom';

const Header = () => {
	const token = localStorage.getItem('token');
	const name = localStorage.getItem('name');
	const navigate = useNavigate();

	const handleLogout = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('name');
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
