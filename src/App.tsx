import React from 'react';

import './App.css';

import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';

import { mockedCoursesList, mockedAuthorsList } from './constants';
import { Route, Routes } from 'react-router';
import Registration from './components/Registration/Registration';

function App() {
	return (
		<div className='app'>
			<Header />
			<div className={'main-page'}>
				<Routes>
					<Route
						path='/'
						element={
							<Courses
								coursesList={mockedCoursesList}
								authorsList={mockedAuthorsList}
							/>
						}
					/>
					<Route path='/registration' element={<Registration />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
