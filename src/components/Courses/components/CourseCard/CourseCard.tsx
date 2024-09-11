import React from 'react';

import { Button } from '../../../../common/Button';

import {ADMIN_ROLE, BUTTON_TEXT_SHOW_COURSE} from '../../../../constants';

import { getCourseDuration } from '../../../../helpers/getCourseDuration';
import { formatCreationDate } from '../../../../helpers/formatCreationDate';

import './CourseCard.css';
import { Course } from '../../../../types/Course';
import { useNavigate } from 'react-router-dom';

import DeleteCourseIcon from './deleteCourse.svg';
import UpdateCourseIcon from './updateCourse.svg';

import {useDispatch, useSelector} from 'react-redux';
import { deleteCourse } from '../../../../store/courses/coursesSlice';
import {getUserRole} from "../../../../store/user/selectors";

type Props = {
	course: Course;
};
const CourseCard = ({ course }: Props) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const userRole = useSelector(getUserRole);
	return (
		<div className='course-card'>
			<h2>{course.title}</h2>
			<div className='course-card-info'>
				<div className='course-description'>
					<p>{course.description}</p>
				</div>
				<div className='course-details'>
					<div>
						<p className='authors'>
							<strong>Authors: </strong>
							{course.authors.join(', ')}
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
					<div className='buttons-bar'>
						<Button
							className='show-course-btn'
							text={BUTTON_TEXT_SHOW_COURSE}
							onClick={() => navigate(`/courses/${course.id}`)}
						/>
						{userRole === ADMIN_ROLE &&
                            <>
                                <Button
                                    icon={DeleteCourseIcon}
                                    onClick={() => dispatch(deleteCourse(course.id))}
                                />
                                <Button icon={UpdateCourseIcon} />
                            </>
						}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CourseCard;
