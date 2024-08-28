import React from 'react';

import './Textarea.css';
export const Textarea = (props) => (
	<label className={`label ${props.className ?? ''}`}>
		<span>{props.label}</span>
		<textarea
			className={`textarea ${props.className ?? ''}`}
			value={props.value}
			name={props.name}
			placeholder={props.placeholder}
			onChange={props.onChange}
			minLength={props.minLength}
		/>
		{props.error && <div>{props.error}</div>}
	</label>
);
