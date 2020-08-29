/** @format */

import React from 'react';
import './Project.css';

const Project = (props) => {
	const { title, description, tech } = props;
	return (
		<div className='project-container'>
			<h3 className='project-title'>{title}</h3>
			<p className='project-description'>{description}</p>
			<p className='project-technologies'>
				{/* tech comes in as an array */}
				{tech.map(e => {
					return (
						<span key={e}>{e} </span>
					)
				})}
			</p>

      {/* Add image and link to live demo to project */}
		</div>
	);
};

export default Project;
