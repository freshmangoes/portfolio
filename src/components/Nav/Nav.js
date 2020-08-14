/** @format */

import React from 'react';
import './Navbar.css'

const Nav = () => {
	return (
		<nav className='nav' id='navbar'>
			<div className='nav-content'>
				<ul className='nav-items'>
					<li className='nav-item'>
						<a href='#'>Projects</a>
					</li>
					<li className='nav-item'>
						<a href='#'>Contact</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Nav;
