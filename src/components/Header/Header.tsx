import React from 'react';

import './Header.css';

import { Logo } from './components/Logo/Logo';
import { Button } from '../../common/Button';

import { BUTTON_TEXT_LOGOUT } from '../../constants';
const Header = () => {
	return (
		<header className='header'>
			<Logo />
			<Button text={BUTTON_TEXT_LOGOUT} />
		</header>
	);
};

export default Header;
