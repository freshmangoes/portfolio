/** @format */

import React from 'react';
import './App.css';
import Intro from './components/Intro/Intro';
import Nav from './components/Nav/Nav';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
	return (
		<div className='App'>
			<Nav />
			<div className='body'>
				<Intro />
				<Projects />
				<Contact />
			</div>
		</div>
	);
}

export default App;
