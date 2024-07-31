import React, {useState} from 'react';

import './App.css';

import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';

import {mockedCoursesList, mockedAuthorsList} from './constants';
import {Navigate, Route, Routes} from 'react-router';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import CourseInfo from './components/CourseInfo/CourseInfo';
import CreateCourse from "./components/CreateCourse/CreateCourse";
import {Course} from "./types/Course";
import {Author} from "./types/Author";

function App() {
	const [coursesList, setCoursesList] = useState<Course[]>(mockedCoursesList);
	const [authorsList, setAuthorsList] = useState<Author[]>(mockedAuthorsList);

	return (
		<div className='app'>
			<Header/>
			<div className={'main-page'}>
				<Routes>
					<Route path='*' element={<Navigate to='/login'/>}/>
					<Route path='/registration' element={<Registration/>}/>
					<Route path='/login' element={<Login/>}/>
					<Route
						path='/courses'
						element={
							<Courses
								coursesList={coursesList}
								authorsList={authorsList}
							/>
						}
					/>
					<Route path='/courses/:courseId'
						   element={
							   <CourseInfo
								   coursesList={coursesList}
								   authorsList={authorsList}
							   />
						   }
					/>
					<Route
						path='/courses/add'
						element={
							<CreateCourse
								setCoursesList={setCoursesList}
								setAuthorsList={setAuthorsList}
								authorsList={authorsList}
							/>
						}
					/>
				</Routes>
			</div>
		</div>
	);
}

export default App;
