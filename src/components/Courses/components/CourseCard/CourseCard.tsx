import React from 'react';

import { Button } from '../../../../common/Button';

import { BUTTON_TEXT_SHOW_COURSE } from '../../../../constants';

import { getCourseDuration } from '../../../../helpers/getCourseDuration';
import { formatCreationDate } from '../../../../helpers/formatCreationDate';

import './CourseCard.css';
import { Course } from '../../../../types/Course';
import {useNavigate} from "react-router-dom";

type Props = {
	course: Course;
};
const CourseCard = ({ course }: Props) => {
	const navigate = useNavigate();
	return (
		<div className='course-card'>
			<h2>{course.title}</h2>
			<div className='course-card-info'>
				<div className='course-description'>
					<p>{course.description}</p>
				</div>
				<div className='course-details'>
					<div>
						<p className='authors'>
							<strong>Authors: </strong>
							{course.authors.join(', ')}
						</p>
						<p>
							<strong>Duration: </strong>
							{getCourseDuration(course.duration)} hours
						</p>
						<p>
							<strong>Created: </strong>
							{formatCreationDate(course.creationDate)}
						</p>
					</div>
					<Button
						className='show-course-btn'
						text={BUTTON_TEXT_SHOW_COURSE}
						onClick={() => navigate(`/courses/${course.id}`)}
					/>
				</div>
			</div>
		</div>
	);
};

export default CourseCard;
