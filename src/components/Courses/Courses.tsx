import React, { Fragment, useState } from 'react';

import CourseCard from './components/CourseCard/CourseCard';

import { CoursesProps } from '../../types/CourseProps';

import './Courses.css';
import { Button } from '../../common/Button';
import { BUTTON_TEXT_ADD_NEW_COURSE } from '../../constants';
import CourseInfo from '../CourseInfo/CourseInfo';
import { getCoursesWithAuthorsNames } from '../../helpers/getCoursesWithAuthorsNames';
import EmptyCourseList from "../EmptyCourseList/EmptyCourseList";

const Courses = ({ coursesList, authorsList }: CoursesProps) => {
	const [selectedCourseId, setSelectedCourseId] = useState(null);

	if (coursesList.length === 0) {
		return <EmptyCourseList/>
	}

	const courses = getCoursesWithAuthorsNames(coursesList, authorsList);
	const coursesCards = courses.map((course) => (
		<li key={course.id}>
			<CourseCard course={course} setState={setSelectedCourseId} />
		</li>
	));
	return (
		<div className='courses-page'>
			{selectedCourseId ? (
				<CourseInfo
					course={courses.find((course) => course.id === selectedCourseId)}
					setState={setSelectedCourseId}
				/>
			) : (
				<>
					<div className={'top-bar'}>
						<div className={'search-bar'}>SearchBar</div>
						<Button text={BUTTON_TEXT_ADD_NEW_COURSE} />
					</div>
					<ul className='course-list'>{coursesCards}</ul>
				</>
			)}
		</div>
	);
};

export default Courses;
