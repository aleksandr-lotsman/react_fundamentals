import React, {useState} from 'react';
import { Input } from '../../../../common/Input';
import { Button } from '../../../../common/Button';
import { BUTTON_TEXT_SEARCH } from '../../../../constants';

import './SearchBar.css';

const SearchBar = ({ setState }) => {
	const [searchPhrase, setSearchPhrase] = useState('');
	const handleSubmit = (event) => {
		event.preventDefault();
		setState(searchPhrase);
	};

	const handleChange = (event) => {
		if (event.target.value === '') {
			setState('');
		}
		setSearchPhrase(event.target.value)
	};

	return (
		<form className={'search-form'} onSubmit={handleSubmit}>
			<Input
				value={searchPhrase}
				name={'query'}
				placeholder={'Search courses'}
				onChange={handleChange}
			/>
			<Button text={BUTTON_TEXT_SEARCH} type={'submit'} />
		</form>
	);
};

export default SearchBar;
