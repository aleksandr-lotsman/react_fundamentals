import React, { useEffect } from 'react';

import './App.css';

import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';

import { Navigate, Route, Routes } from 'react-router';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import CourseInfo from './components/CourseInfo/CourseInfo';
import CourseForm from './components/CourseForm/CourseForm';
import { useNavigate } from 'react-router-dom';

import * as localStorage from './helpers/localStorage';

function App() {
	const navigate = useNavigate();

	useEffect(() => {
		const token = localStorage.getToken();
		if (!token) {
			navigate('/login');
		}
	}, []);

	return (
		<div className='app'>
			<Header />
			<div className={'main-page'}>
				<Routes>
					<Route path='*' element={<Navigate to='/login' />} />
					<Route path='/registration' element={<Registration />} />
					<Route path='/login' element={<Login />} />
					<Route path='/courses' element={<Courses />} />
					<Route path='/courses/:courseId' element={<CourseInfo />} />
					<Route path='/courses/add' element={<CourseForm />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
