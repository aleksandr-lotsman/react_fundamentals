import React from 'react';

import {Button} from '../../common/Button';

import {BUTTON_TEXT_BACK} from '../../constants';
import {Course} from '../../types/Course';

import {getCourseDuration} from '../../helpers/getCourseDuration';
import {formatCreationDate} from '../../helpers/formatCreationDate';

import './CourseInfo.css';
import {useNavigate, useParams} from 'react-router-dom';
import {getCoursesWithAuthorsNames} from "../../helpers/getCoursesWithAuthorsNames";
import {Author} from "../../types/Author";

type Props = {
	coursesList: Course[];
	authorsList: Author[];
};

const getCourse = (courseId: string, coursesList: Course[]): Course => {
	return coursesList.find((course) => course.id === courseId);
};

const CourseInfo = ({coursesList, authorsList}: Props) => {
	const courses = getCoursesWithAuthorsNames(coursesList, authorsList);
	const navigate = useNavigate();
	const { courseId } = useParams();
	const course: Course = getCourse(courseId, courses);
	return (
		<div className={'course-info'}>
			<h1>{course.title}</h1>
			<div className={'course-info-container'}>
				<h2>Description:</h2>
				<div className={'course-info-details'}>
					<div className={'course-info-description'}>{course.description}</div>
					<div className={'course-details-grid'}>
						<div>
							<strong>ID:</strong>
						</div>
						<div>{course.id}</div>
						<div>
							<strong>Duration:</strong>
						</div>
						<div>
							<strong>{getCourseDuration(course.duration)}</strong> hours
						</div>
						<div>
							<strong>Created:</strong>
						</div>
						<div>{formatCreationDate(course.creationDate)}</div>
						<div>
							<strong>Authors:</strong>
						</div>
						<div>{course.authors.join(', ')}</div>
					</div>
				</div>
			</div>
			<div className={'bottom-bar'}>
				<Button
					className={'back-btn'}
					text={BUTTON_TEXT_BACK}
					onClick={() => navigate('/courses')}
				/>
			</div>
		</div>
	);
};

export default CourseInfo;
