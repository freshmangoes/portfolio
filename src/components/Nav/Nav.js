/** @format */

import React from 'react';
import './Navbar.css';

// Add scroll function to each section

const Nav = () => {
	return (
		<div className='navbar-container'>
			<nav className='navbar' id='navbar'>
				<a href='#contact'>
					Contact
				</a>
				<a href='#projects'>
					Projects
				</a>
			</nav>
		</div>
	);
};

export default Nav;
