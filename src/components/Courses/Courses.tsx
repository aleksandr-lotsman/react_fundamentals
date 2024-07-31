import React, { useState } from 'react';

import CourseCard from './components/CourseCard/CourseCard';

import { CoursesProps } from '../../types/CourseProps';

import './Courses.css';
import { Button } from '../../common/Button';
import { BUTTON_TEXT_ADD_NEW_COURSE } from '../../constants';
import { getCoursesWithAuthorsNames } from '../../helpers/getCoursesWithAuthorsNames';
import EmptyCourseList from '../EmptyCourseList/EmptyCourseList';
import SearchBar from './components/Search/SearchBar';
import {useNavigate} from "react-router-dom";

const Courses = ({ coursesList, authorsList }: CoursesProps) => {
	const [query, setQuery] = useState('');
	const navigate = useNavigate();

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
				<CourseCard course={course} />
			</li>
		));
	return (
		<div className='courses-page'>
			<div className={'top-bar'}>
				<SearchBar setState={setQuery} />
				<Button text={BUTTON_TEXT_ADD_NEW_COURSE} onClick={() => navigate('/courses/add')}/>
			</div>
			<ul className='course-list'>{coursesCards}</ul>
		</div>
	);
};

export default Courses;
