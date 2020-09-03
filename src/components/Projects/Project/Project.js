/** @format */

import React from 'react';

const Project = (props) => {
	const { title, description, tech, link, source, imgSource } = props;
	return (
		<div className='project-container'>
			<h3>{title}</h3>
			<p>{description}</p>
			<img src={`${imgSource}`} alt={title} />
			<p className='project-techs'>
				{/* tech comes in as an array */}
				{tech.map((e) => {
					return (
						<span className='project-tech' key={e}>
							{e}{' '}
						</span>
					);
				})}
			</p>
			<div className='project-link-container'>
				<a className='project-link hvr-bob' href={link}>
					Live Demo
				</a>
				<a className='project-link hvr-bob' href={source}>
					Source
				</a>
			</div>
		</div>
	);
};

export default Project;
