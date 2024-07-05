import React from 'react';

import './Button.css';

export const Button = (props) => (
	<button className={`button ${props.className ?? ''}`} onClick={props.onClick}>
		{props.icon}
		{props.text}
	</button>
);
