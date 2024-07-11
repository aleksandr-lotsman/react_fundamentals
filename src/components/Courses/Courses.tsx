import React, { Fragment, useState } from 'react';

import CourseCard from './components/CourseCard/CourseCard';

import { CoursesProps } from '../../types/CourseProps';

import './Courses.css';
import { Button } from '../../common/Button';
import { BUTTON_TEXT_ADD_NEW_COURSE } from '../../constants';
import CourseInfo from '../CourseInfo/CourseInfo';
import { getCoursesWithAuthorsNames } from '../../helpers/getCoursesWithAuthorsNames';
import EmptyCourseList from '../EmptyCourseList/EmptyCourseList';
import SearchBar from './components/Search/SearchBar';

const Courses = ({ coursesList, authorsList }: CoursesProps) => {
	const [selectedCourseId, setSelectedCourseId] = useState(null);
	const [query, setQuery] = useState('');

	if (coursesList.length === 0) {
		return <EmptyCourseList />;
	}

	const courses = getCoursesWithAuthorsNames(coursesList, authorsList);
	const coursesCards = courses
		.filter(
			(course) =>
				course.id.toLowerCase().includes(query.toLowerCase()) ||
				course.title.toLowerCase().includes(query.toLowerCase())
		)
		.map((course) => (
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
							<SearchBar setState={setQuery} />
						<Button text={BUTTON_TEXT_ADD_NEW_COURSE} />
					</div>
					<ul className='course-list'>{coursesCards}</ul>
				</>
			)}
		</div>
	);
};

export default Courses;
