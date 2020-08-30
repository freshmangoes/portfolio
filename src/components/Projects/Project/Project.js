/** @format */

import React from 'react';
import './Project.css';

const Project = (props) => {
	const { title, description, tech, link, source, imgSource } = props;
	// console.log(`imgSource:: ${imgSource}`);
	return (
		<div className='project-container'>
			<h3 className='project-title'>{title}</h3>
			<p className='project-description'>{description}</p>
			<img src={`${imgSource}`} alt={title}/>
			<p className='project-techs'>
				{/* tech comes in as an array */}
				{tech.map((e) => {
					return <span className='project-tech' key={e}>{e} </span>;
				})}
			</p>
			<div className='project-link-container'>
				<a className='project-link' href={link}>Live Demo</a>
			</div>
			<div className='project-link-container'>
				<a className='project-link' href={source}>Source</a>
			</div>

			{/* Add image and link to live demo to project */}
		</div>
	);
};

export default Project;
