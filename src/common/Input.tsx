import React from 'react';

import './Input.css';
export const Input = (props) => (
	<label className={`label ${props.className ?? ''}`}>
		<span>{props.lable}</span>
		<input
			className={`input ${props.className ?? ''}`}
			value={props.value}
			name={props.name}
			type={props.type}
			placeholder={props.placeholder}
			onChange={props.onChange}
		/>
		{props.error && <div>{props.error}</div>}
	</label>
);
