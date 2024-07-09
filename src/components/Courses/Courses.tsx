import React, {Fragment, useState} from 'react';

import CourseCard from './components/CourseCard/CourseCard';

import { CoursesProps } from '../../types/CourseProps';



import './Courses.css';
import { Button } from '../../common/Button';
import { BUTTON_TEXT_ADD_NEW_COURSE } from '../../constants';
import CourseInfo from "../CourseInfo/CourseInfo";

const Courses = ({ coursesList }: CoursesProps) => {
	const [selectedCourseId, setSelectedCourseId] = useState(null);

	const courses = coursesList.map((course) => (
		<li key={course.id}>
			<CourseCard
				course={course}
				setState={setSelectedCourseId}
			/>
		</li>
	));
	return (
		<div className='courses-page'>
			{selectedCourseId ?
				<CourseInfo course={coursesList.find(course => course.id === selectedCourseId)}
							setState={setSelectedCourseId}/>
				: <>
					<div className={'top-bar'}>
						<div className={'search-bar'}>SearchBar</div>
						<Button text={BUTTON_TEXT_ADD_NEW_COURSE}/>
					</div>
					<ul className='course-list'>{courses}</ul>
				</>
			}
		</div>
	);
};

export default Courses;
