/** @format */

import React from 'react';
import './Intro.css';
import content from '../../content.json';

const Intro = () => {
	return (
		<div className='intro-container'>
			<h1 className='name-banner'>{content.intro.name}</h1>
			<p className='about'>
				{content.intro.about}
			</p>
			<p className='about'>Check out my projects below!</p>
		</div>
	);
};

export default Intro;
