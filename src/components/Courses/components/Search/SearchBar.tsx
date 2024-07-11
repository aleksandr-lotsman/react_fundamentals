import React from "react";
import {Input} from "../../../../common/Input";
import {Button} from "../../../../common/Button";
import {BUTTON_TEXT_SEARCH} from "../../../../constants";

import './SearchBar.css'

const SearchBar = ({setState}) => {
	const handleSubmit = (event) => {
		event.preventDefault();
		const query = new FormData(event.target).get("query");
		setState(query);
	}

	const handleClear = (event) => {
		if (event.target.value === '') {
			setState('')
		}
	}

	return (
		<form className={"search-form"} onSubmit={handleSubmit}>
			<Input name={'query'} placeholder={'Search courses'} onChange={handleClear}/>
			<Button text={BUTTON_TEXT_SEARCH} type={"submit"}/>
		</form>
	)
}

export default SearchBar;