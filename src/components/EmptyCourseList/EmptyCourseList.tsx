import React from 'react';

import { Button } from '../../common/Button';

import { ADMIN_ROLE, BUTTON_TEXT_ADD_NEW_COURSE } from '../../constants';

import './EmptyCourseList.css';
import { useSelector } from 'react-redux';
import { getUserRole } from '../../store/user/selectors';
import { useNavigate } from 'react-router-dom';
const EmptyCourseList = () => {
	const userRole: string = useSelector(getUserRole);
	const navigate = useNavigate();
	return (
		<div className={'empty-course-page'}>
			<h2>Your List Is Empty</h2>

			{userRole === ADMIN_ROLE ? (
				<>
					<p>Please use ’Add New Course’ button to add your first course</p>
					<Button
						text={BUTTON_TEXT_ADD_NEW_COURSE}
						onClick={() => navigate('/courses/add')}
					/>
				</>
			) : (
				<p>
					You don't have permissions to create a course. Please log in as ADMIN
				</p>
			)}
		</div>
	);
};

export default EmptyCourseList;
