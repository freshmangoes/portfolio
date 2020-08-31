/** @format */

import React from 'react';
import './Navbar.css';

// Add scroll function to each section

const Nav = () => {
	return (
		<div className='navbar-container'>
			<nav className='navbar' id='navbar'>
				<a className='hvr-float' href='#contact'>About</a>
				<a className='hvr-float' href='#projects'>Projects</a>
				<a className='hvr-float' href='./assets/Resume.pdf'>Resume</a>
			</nav>
		</div>
	);
};

export default Nav;
