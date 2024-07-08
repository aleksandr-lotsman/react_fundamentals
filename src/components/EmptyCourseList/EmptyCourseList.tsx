import React from 'react';

import { Button } from '../../common/Button';

import { BUTTON_TEXT_ADD_NEW_COURSE } from '../../constants';

import './EmptyCourseList.css'
const EmptyCourseList = () => {
	return (
		<div className={"empty-course-page"}>
			<h2>Your List Is Empty</h2>
			<p>Please use ’Add New Course’ button to add your first course</p>
			<Button text={BUTTON_TEXT_ADD_NEW_COURSE} />
		</div>
	);
};

export default EmptyCourseList;
