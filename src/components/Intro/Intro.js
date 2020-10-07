/** @format */

import React from 'react';
import content from '../../content.json';

const Intro = () => {
	return (
		<div className='intro-container' id='intro'>
			<h1 className='name-banner'>{content.intro.name}</h1>
			<div>
				<h4>Who am I?</h4>
				<p className='about'>{content.intro.bio}</p>
			</div>
			<div>
				<h4>What am I?</h4>
				<p className='about'>{content.intro.about}</p>
			</div>
			<p>Location: {content.intro.location}</p>
			<div className='prof-container'>
				Skills & proficiencies:{' '}
				<ul>
					{content.intro.skills.map((e) => {
						const { skill, prof } = e;
						return <li className='prof-label'>{skill}</li>;
					})}

				</ul>
			</div>
			<p>Interests: {content.intro.interests.join(', ')}</p>
			<p className='about'>Check out my projects below!</p>
		</div>
	);
};

export default Intro;
