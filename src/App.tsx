import React from 'react';

import './App.css';

import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';

import { mockedCoursesList, mockedAuthorsList } from './constants';
import { Navigate, Route, Routes } from 'react-router';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import CourseInfo from './components/CourseInfo/CourseInfo';

function App() {
	return (
		<div className='app'>
			<Header />
			<div className={'main-page'}>
				<Routes>
					<Route path='*' element={<Navigate to='/login' />} />
					<Route path='/registration' element={<Registration />} />
					<Route path='/login' element={<Login />} />
					<Route
						path='/courses'
						element={
							<Courses
								coursesList={mockedCoursesList}
								authorsList={mockedAuthorsList}
							/>
						}
					/>
					<Route path='/courses/:courseId' element={<CourseInfo />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
