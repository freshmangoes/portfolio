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
			<p className='about'>{content.intro.about}</p>
			<p>Location: {content.intro.location}</p>
			<div>
				Skills & proficiencies:{' '}
				{content.intro.skills.map((e) => {
					const { skill, prof } = e;
					const widthStyle = {
						width: `${prof}%`,
					};
					return (
						<div className='prof-container'>
							<span className='prof-label'>
								<label className=''>{skill}</label>
							</span>
							<span className='prof-meter' style={widthStyle}></span>
						</div>
					);
				})}
			</div>
			<p>Interests: {content.intro.interests.join(', ')}</p>
			<p className='about'>Check out my projects below!</p>
		</div>
	);
};

export default Intro;
