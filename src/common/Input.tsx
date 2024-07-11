import React from 'react';

export const Input = (props) => (
	<label>
		<input
			value={props.value}
			name={props.name}
			type={props.type}
			placeholder={props.placeholder}
			onChange={props.onChange}
		/>
	</label>
);
