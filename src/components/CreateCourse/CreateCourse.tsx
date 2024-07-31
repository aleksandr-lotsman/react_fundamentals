import React, {useState} from 'react';
import {Input} from "../../common/Input";
import './CreateCourse.css';
import {Button} from "../../common/Button";
import AuthorItem from "./components/AuthorItem/AuthorItem";
import {useNavigate} from "react-router-dom";
import {Course} from "../../types/Course";
import {getCourseDuration} from "../../helpers/getCourseDuration";
import {CourseFormSubmitErrors} from "../../types/CourseFormSubmitErrors";
import {isDataValid} from "../../helpers/isDataValid";
import {formatCurrentDate} from "../../helpers/formatCurrentDate";
import {CREATE_DATE_INPUT_FORMAT} from "../../constants";
import {v4 as uuidv4} from 'uuid';
import {Author} from "../../types/Author";
import {AuthorFormSubmitErrors} from "../../types/AuthorFormSubmitErrors";

type CourseFormData = {
	title: string;
	description: string;
	duration: number;
};

type AuthorFormData = {
	name: string;
};

const CreateCourse = ({
						  setCoursesList,
						  setAuthorsList,
						  authorsList,
					  }: {
	setCoursesList: React.Dispatch<React.SetStateAction<Course[]>>;
	setAuthorsList: React.Dispatch<React.SetStateAction<Author[]>>;
	authorsList: Author[];
}) => {
	const navigate = useNavigate();
	const [courseData, setCourseData] = useState<CourseFormData>({
		title: '',
		description: '',
		duration: 0,
	});
	const [authorData, setAuthorData] = useState<AuthorFormData>({
		name: '',
	});
	const [authors, setAuthors] = useState<Author[]>(authorsList);
	const [addedAuthors, setAddedAuthors] = useState<Author[]>([]);

	const [courseFormErrors, setCourseFormErrors] = useState<CourseFormSubmitErrors>({});
	const [authorFormErrors, setAuthorFormErrors] = useState<AuthorFormSubmitErrors>({});

	const handleChange = (e) => {
		setCourseData({...courseData, [e.target.name]: e.target.value});
		setAuthorData({...authorData, [e.target.name]: e.target.value});
		setCourseFormErrors({...courseFormErrors, [e.target.name]: ''});
		setAuthorFormErrors({...authorFormErrors, [e.target.name]: ''});
	};

	const handleCreateCourse = async (e) => {
		e.preventDefault();
		if (!isDataValid<CourseFormData, CourseFormSubmitErrors>(courseData, setCourseFormErrors)) {
			console.error('Invalid course data: ' + Object.values(courseFormErrors));
			return;
		}
		const newCourse: Course = {
			id: uuidv4(),
			title: courseData.title,
			description: courseData.description,
			creationDate: formatCurrentDate(CREATE_DATE_INPUT_FORMAT),
			duration: courseData.duration,
			authors: addedAuthors.map((author) => author.id),
		};
		setCoursesList((prevCourses) => [...prevCourses, newCourse]);
		navigate('/courses');
	}

	const handleCreateAuthor = (e) => {
		e.preventDefault();
		if (!isDataValid<AuthorFormData, AuthorFormSubmitErrors>(authorData, setAuthorFormErrors)) {
			console.error('Invalid author data: ' + Object.values(authorFormErrors));
			return;
		}
		const newAuthor: Author = {
			id: uuidv4(),
			name: authorData.name,
		};
		setAuthors((prevAuthors) => [...prevAuthors, newAuthor]);
		setAuthorsList((prevAuthors) => [...prevAuthors, newAuthor]);
	}

	const getAuthorsItems = (authors: Author[], isAddedToCourse: boolean) => {
		return authors.map((author) => (
			<AuthorItem
				key={author.id}
				author={author}
				isAddedToCourse={isAddedToCourse}
				setAuthors={setAuthors}
				setAddedAuthors={setAddedAuthors}
			/>
		));
	}

	return (
		<form className='course-create-edit-page'>
			<h1>Course Edit/Create Page</h1>
			<div className={'course-create-edit-container'}>
				<div className={'main-info-container'}>
					<h2>Main Info</h2>
					<Input
						className={`${courseFormErrors.title ? 'error' : ''}`}
						label={'Title'}
						name={'title'}
						placeholder={'Enter course title'}
						onChange={handleChange}
						error={courseFormErrors.title}
					/>
					<Input
						className={`${courseFormErrors.description ? 'error' : ''}`}
						label={'Description'}
						name={'description'}
						placeholder={'Enter course description'}
						onChange={handleChange}
						error={courseFormErrors.description}
					/>
				</div>
				<div className={'duration-container'}>
					<h2>Duration</h2>
					<Input
						className={`${courseFormErrors.duration ? 'error' : ''}`}
						label={'Duration'}
						name={'duration'}
						placeholder={'Enter course duration'}
						onChange={handleChange}
						error={courseFormErrors.duration}
					/>
					<strong>{getCourseDuration(courseData.duration)}</strong> hours
				</div>
				<div className={'authors-container'}>
					<div className={'authors'}>
						<h2>Authors</h2>
						<div>
							<Input
								className={`${authorFormErrors.name ? 'error' : ''}`}
								label={'Author Name'}
								name={'name'}
								placeholder={'Enter author name'}
								onChange={handleChange}
								error={authorFormErrors.name}
							/>
							<Button text={'CREATE AUTHOR'} onClick={handleCreateAuthor}/>
						</div>
						<ul>{getAuthorsItems(authors, false)}</ul>
					</div>
					<div className={'course-authors'}>
						<h2>Course Authors</h2>
						<ul>{getAuthorsItems(addedAuthors, true)}</ul>
					</div>
				</div>
			</div>
			<div className={'bottom-bar'}>
				<Button
					className={'back-btn'}
					text={'CANCEL'}
					onClick={() => navigate('/courses')}
				/>
				<Button
					text={'CREATE COURSE'}
					type={'submit'}
					onClick={handleCreateCourse}
				/>
			</div>
		</form>
	)
}

export default CreateCourse;