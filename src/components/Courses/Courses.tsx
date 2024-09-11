import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/Search/SearchBar';

import './Courses.css';

import { Button } from '../../common/Button';
import { BUTTON_TEXT_ADD_NEW_COURSE } from '../../constants';
import { getCoursesWithAuthorsNames } from '../../helpers/getCoursesWithAuthorsNames';
import EmptyCourseList from '../EmptyCourseList/EmptyCourseList';
import { Course } from '../../types/Course';
import { getCourses } from '../../store/courses/selectors';
import { getAuthors } from '../../store/authors/selectors';
import { fetchCourses } from '../../store/courses/coursesSlice';
import { AppDispatch } from '../../store';
import { fetchAuthors } from '../../store/authors/authorsSlice';

const Courses = () => {
	const [query, setQuery] = useState('');
	const navigate = useNavigate();
	const dispatch: AppDispatch = useDispatch();
	const coursesFromDb: Course[] = useSelector(getCourses);
	const authorsFromDb = useSelector(getAuthors);

	useEffect(() => {
		dispatch(fetchCourses());
		dispatch(fetchAuthors());
	}, [dispatch]);

	if (coursesFromDb.length === 0) {
		return <EmptyCourseList />;
	}

	const courses = getCoursesWithAuthorsNames(coursesFromDb, authorsFromDb);
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
				<Button
					text={BUTTON_TEXT_ADD_NEW_COURSE}
					onClick={() => navigate('/courses/add')}
				/>
			</div>
			<ul className='course-list'>{coursesCards}</ul>
		</div>
	);
};

export default Courses;
