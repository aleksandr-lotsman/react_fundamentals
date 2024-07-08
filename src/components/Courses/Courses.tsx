import React from 'react';

import CourseCard from './components/CourseCard/CourseCard';

import { getCourseAuthorsNames } from '../../helpers/getCourseAuthorsNames';

import { CoursesProps } from '../../types/CourseProps';

import './Courses.css';
import { Button } from '../../common/Button';
import { BUTTON_TEXT_ADD_NEW_COURSE } from '../../constants';

const Courses: React.FC<CoursesProps> = ({ coursesList, authorsList }) => {
	const courses = coursesList.map((course) => (
		<li key={course.id}>
			<CourseCard
				title={course.title}
				description={course.description}
				creationDate={course.creationDate}
				duration={course.duration}
				authors={getCourseAuthorsNames(course.authors, authorsList)}
			/>
		</li>
	));
	return (
		<div className='courses-page'>
			<div className={'top-bar'}>
				<div className={'search-bar'}>SearchBar</div>
				<Button text={BUTTON_TEXT_ADD_NEW_COURSE} />
			</div>
			<ul className='course-list'>{courses}</ul>
		</div>
	);
};

export default Courses;
