/** @format */

import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Nav = () => {
	return (
		<div className='navbar-container'>
			<nav className='navbar' id='navbar'>
				<div className='hvr-float'>
					{/* <a href='#intro'>About</a> */}
					<AnchorLink offset='100' href='#intro'>About</AnchorLink>
				</div>
				<div className='hvr-float'>
					{/* <a href='#projects'>Projects</a> */}
					<AnchorLink offset='70' href='#projects'>Projects</AnchorLink>
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
