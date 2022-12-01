/** @format */

import React from 'react';
import content from '../../content.json';

const Intro = () => {
	return (
		<div className='intro-container' id='intro'>
			<h1 className='name-banner name-text'>{content.intro.name}</h1>
			<div>
				<h4 className='text'>About</h4>
				<p className='about text'>{content.intro.bio}</p>
			</div>
			<p className='text'>Location: {content.intro.location}</p>
			<div className='text'>
				Skills & proficiencies:{' '}
				{content.intro.skills.map((e) => {
					const { skill, prof } = e;
					return (
						<div className='prof-container'>
							<span className='prof-label'>
								<label className=''>{skill}</label>
							</span>
						</div>
					);
				})}

			</div>
			<h4 className='about text'>Check out my projects below!</h4>
		</div>
	);
};

export default Intro;
