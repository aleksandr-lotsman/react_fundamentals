import React, { useState } from 'react';

import { Button } from '../../../../common/Button';

import {
	BUTTON_TEXT_SHOW_COURSE,
	mockedAuthorsList,
} from '../../../../constants';

import { getCourseDuration } from '../../../../helpers/getCourseDuration';
import { formatCreationDate } from '../../../../helpers/formatCreationDate';
import { getCourseAuthorsNames } from '../../../../helpers/getCourseAuthorsNames';

import './CourseCard.css';
import { Course } from '../../../../types/Course';

type Props = {
	course: Course;
	setState: any;
};
const CourseCard = ({ course, setState }: Props) => {
	return (
		<div className='course-card'>
			<h2>{course.title}</h2>
			<div className='course-info'>
				<div className='course-description'>
					<p>{course.description}</p>
				</div>
				<div className='course-details'>
					<div>
						<p className='authors'>
							<strong>Authors: </strong>
							{getCourseAuthorsNames(course.authors, mockedAuthorsList)}
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
						onClick={() => setState(course.id)}
					/>
				</div>
			</div>
		</div>
	);
};

export default CourseCard;
