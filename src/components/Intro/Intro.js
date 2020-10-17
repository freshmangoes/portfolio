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
			{/* <p>Interests: {content.intro.interests.join(', ')}</p> */}
			<h4 className='about'>Check out my projects below!</h4>
		</div>
	);
};

export default Intro;
