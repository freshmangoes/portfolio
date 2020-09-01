/** @format */

import React from 'react';
import './Navbar.css';

// Add scroll function to each section

const Nav = () => {
	return (
		<div className='navbar-container'>
			<nav className='navbar' id='navbar'>
				<div className='hvr-float'>
					<a href='#contact'>About</a>
				</div>
				<div className='hvr-float'>
					<a href='#projects'>Projects</a>
				</div>
				<div className='hvr-float'>
					<a href='./assets/Resume.pdf'>Resume</a>
				</div>
			</nav>
		</div>
	);
};

export default Nav;
