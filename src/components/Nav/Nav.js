/** @format */

import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Navbar.css';

// Add scroll function to each section

const Nav = () => {
	return (
		<div className='navbar-container'>
			<nav className='navbar' id='navbar'>
				<div className='hvr-float'>
					{/* <a href='#intro'>About</a> */}
					<AnchorLink href='#intro'>About</AnchorLink>
				</div>
				<div className='hvr-float'>
					{/* <a href='#projects'>Projects</a> */}
					<AnchorLink href='#projects'>Projects</AnchorLink>
				</div>
				<div className='hvr-float'>
					<a href='./assets/Resume.pdf'>Resume</a>
				</div>
			</nav>
			<div className='phantom-nav'></div>
		</div>
	);
};

export default Nav;
