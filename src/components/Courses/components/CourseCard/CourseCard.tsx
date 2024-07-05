import React from 'react';

import { Button } from '../../../../common/Button';

import { BUTTON_TEXT_SHOW_COURSE } from '../../../../constants';

import { getCourseDuration } from '../../../../helpers/getCourseDuration';
import { formatCreationDate } from '../../../../helpers/formatCreationDate';

import './CourseCard.css';

const CourseCard = ({
	title,
	duration,
	creationDate,
	description,
	authors,
}) => {
	return (
		<div className='course-card'>
			<h2>{title}</h2>
			<div className='course-info'>
				<div className='course-description'>
					<p>{description}</p>
				</div>
				<div className='course-details'>
					<div>
						<p className='authors'>
							<strong>Authors: </strong>
							{authors}
						</p>
						<p>
							<strong>Duration: </strong>
							{getCourseDuration(duration)}
						</p>
						<p>
							<strong>Created: </strong>
							{formatCreationDate(creationDate)}
						</p>
					</div>
					<Button className='show-course-btn' text={BUTTON_TEXT_SHOW_COURSE} />
				</div>
			</div>
		</div>
	);
};

export default CourseCard;
