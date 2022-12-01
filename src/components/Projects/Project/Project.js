/** @format */

import React from 'react';

const Project = (props) => {
	const { title, description, tech, link, source, imgSource, deprecated } = props;
	return (
		<div className='project-container'>
			<h3 className={deprecated? `strike proj-title`:`proj-title`}>
				{title} 
				{deprecated? ` - Deprecated`:``}
			</h3>
			<p className={deprecated? `strike text`:`text`}>{description}</p>
			{deprecated?
				<p className='text'>
					Unfortunately one of the technologies or APIs I used in this project is discontinued, and it will not function as it should :(
				</p> : ''
			}
			<img src={`${imgSource}`} alt={title} />
			<p className='project-techs text'>
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
				<a className='project-link hvr-bob' href={link} target='_blank' rel='noopener noreferrer'>
					Live Demo
				</a>
				<a className='project-link hvr-bob' href={source} target='_blank' rel='noopener noreferrer'>
					Source
				</a>
			</div>
		</div>
	);
};

export default Project;
