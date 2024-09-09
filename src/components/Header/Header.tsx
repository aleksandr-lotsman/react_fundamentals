import React from 'react';

import './Header.css';

import { Logo } from './components/Logo/Logo';
import { Button } from '../../common/Button';

import { BUTTON_TEXT_LOGOUT } from '../../constants';
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {getUserName} from "../../store/user/selectors";
import {logoutUserAction} from "../../store/user/actions";

const Header = () => {
	const token = localStorage.getItem('token');
	const navigate = useNavigate();
	const name = useSelector(getUserName)
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(logoutUserAction())
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
