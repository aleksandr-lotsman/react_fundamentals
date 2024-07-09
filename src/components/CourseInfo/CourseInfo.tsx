import React from 'react';

import {Button} from "../../common/Button";

import {BUTTON_TEXT_BACK, mockedAuthorsList} from "../../constants";
import {Course} from "../../types/Course";

import {getCourseDuration} from "../../helpers/getCourseDuration";
import {formatCreationDate} from "../../helpers/formatCreationDate";
import {getCourseAuthorsNames} from "../../helpers/getCourseAuthorsNames";

type Props = {
	course: Course
	setState: any
}

const CourseInfo = ({course, setState}: Props) => {
	return (
		<div className={"course-info"}>
			<h1>{course.title}</h1>
			<div className={"course-info-card"}>
				<h2>Description:</h2>
				<div>
					<div>{course.description}</div>
					<div className={"course-details-grid"}>
						<div>ID:</div>
						<div>{course.id}</div>
						<div>Duration:</div>
						<div><strong>{getCourseDuration(course.duration)}</strong> hours</div>
						<div>Created:</div>
						<div>{formatCreationDate(course.creationDate)}</div>
						<div>Authors:</div>
						<div>{getCourseAuthorsNames(course.authors, mockedAuthorsList)}</div>
					</div>
				</div>
			</div>
			<div>
				<Button text={BUTTON_TEXT_BACK} onClick={() => setState(null)}/>
			</div>
		</div>
	)
}

export default CourseInfo;