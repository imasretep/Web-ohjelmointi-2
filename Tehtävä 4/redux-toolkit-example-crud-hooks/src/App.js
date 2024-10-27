import React from 'react';
import {
	BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddTutorial from './components/AddTutorial.js';
import Tutorial from './components/Tutorial.js';
import TutorialsList from './components/TutorialsList.js';
import AddComment from './components/AddComment.js';

function App() {
	return (
		<Router>
			<nav className='navbar navbar-expand navbar-dark bg-dark'>
				<a href='/tutorials' className='navbar-brand'>
          bezKoder
				</a>
				<div className='navbar-nav mr-auto'>
					<li className='nav-item'>
						<Link to={'/tutorials'} className='nav-link'>
              Tutorials
						</Link>
					</li>
					<li className='nav-item'>
						<Link to={'/add'} className='nav-link'>
              Add
						</Link>
					</li>

					<li className='nav-item'>
						<Link to={'/comment'} className='nav-link'>
              Comment
						</Link>
					</li>

				</div>
			</nav>

			<div className='container mt-3'>
				<Routes>
					<Route path='/' element={<TutorialsList/>} />
					<Route path='/tutorials' element={<TutorialsList/>} />
					<Route path='/add' element={<AddTutorial/>} />
					<Route path='/tutorials/:id' element={<Tutorial/>} />
					<Route path='/comment' element={<AddComment />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
