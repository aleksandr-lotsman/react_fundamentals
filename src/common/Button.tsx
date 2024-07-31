import React from 'react';

import './Button.css';

export const Button = (props) => (
	<button
		className={`button ${props.className ?? ''}`}
		onClick={props.onClick}
		type={props.type}
	>
		{props.icon && <img src={props.icon} alt='icon' />}
		{props.text}
	</button>
);
