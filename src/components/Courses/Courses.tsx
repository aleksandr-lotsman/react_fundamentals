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
import * as apiService from '../../api/ApiService';

import { ApiResponse } from '../../types/ApiResponse';
import { Author } from '../../types/Author';
import { Course } from '../../types/Course';

import { saveCoursesAction } from '../../store/courses/actions';
import { getCourses } from '../../store/courses/selectors';
import { getAuthors } from '../../store/authors/selectors';
import { saveAuthorsAction } from '../../store/authors/actions';

const Courses = () => {
	const [query, setQuery] = useState('');
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const coursesFromDb = useSelector(getCourses);
	const authorsFromDb = useSelector(getAuthors);

	useEffect(() => {
		const fetchAndSaveCourses = async () => {
			const responseBody: ApiResponse<Course[]> = await apiService.getCourses();
			if (responseBody.successful) {
				const courses: Course[] = responseBody.result.map((course) => ({
					id: course.id,
					title: course.title,
					description: course.description,
					creationDate: course.creationDate,
					duration: course.duration,
					authors: course.authors,
				}));
				dispatch(saveCoursesAction(courses));
			}
		};
		const fetchAndSaveAuthors = async () => {
			const responseBody: ApiResponse<Author[]> = await apiService.getAuthors();
			if (responseBody.successful) {
				const authors: Author[] = responseBody.result.map((author) => ({
					id: author.id,
					name: author.name,
				}));
				dispatch(saveAuthorsAction(authors));
			}
		};
		fetchAndSaveCourses();
		fetchAndSaveAuthors();
	}, []);

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
