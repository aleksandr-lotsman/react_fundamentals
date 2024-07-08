import React from 'react';

import './App.css';

import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import EmptyCourseList from './components/EmptyCourseList/EmptyCourseList';

import { mockedAuthorsList, mockedCoursesList } from './constants';

const defineMainPage = () => {
	return mockedCoursesList.length !== 0 ? (
		<Courses coursesList={mockedCoursesList} authorsList={mockedAuthorsList} />
	) : (
		<EmptyCourseList />
	);
};

function App() {
	return (
		<div className='app'>
			<Header />
			<div className={'main-page'}>{defineMainPage()}</div>
		</div>
	);
}

export default App;
