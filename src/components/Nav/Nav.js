/** @format */

import React from 'react';
import './Navbar.css';

// Add scroll function to each section

const Nav = () => {
	return (
		<nav className='nav' id='navbar'>
			<div className='nav-content'>
				<ul className='nav-items'>
					<li className='nav-item'>
						<a href='#projects'>Projects</a>
					</li>
					<li className='nav-item'>
						<a href='#contact'>Contact</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Nav;
