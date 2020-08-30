/** @format */

import React from 'react';
import './App.css';
import Intro from './components/Intro/Intro';
import Nav from './components/Nav/Nav';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<div className='App'>
			<Nav />
			<div className='body'>
				<Intro />
				<Projects />
				<Footer/>
			</div>
		</div>
	);
}

export default App;
