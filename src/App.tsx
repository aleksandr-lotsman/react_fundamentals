import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import { mockedAuthorsList, mockedCoursesList } from './constants';

function App() {
	return (
		<div className='app'>
			<Header />
			<div className={'main-page'}>
				<Courses
					coursesList={mockedCoursesList}
					authorsList={mockedAuthorsList}
				/>
			</div>
		</div>
	);
}

export default App;
