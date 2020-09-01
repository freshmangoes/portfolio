/** @format */

import React from 'react';
import './Intro.css';
import content from '../../content.json';

const Intro = () => {
	return (
		<div className='intro-container' id='intro'>
			<h1 className='name-banner'>{content.intro.name}</h1>
			<p className='about'>{content.intro.about}</p>
			<p>Location: {content.intro.location}</p>
			<p>Skills & proficiencies: {content.intro.skills.join(', ')}</p>
			<p>Interests: {content.intro.interests.join(', ')}</p>
			<p className='about'>Check out my projects below!</p>
		</div>
	);
};

export default Intro;
