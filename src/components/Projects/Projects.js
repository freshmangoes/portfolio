/** @format */

import React from 'react';
import Project from './Project/Project';
import content from '../../content.json';

const Projects = () => {
	return (
		<div id='projects'>
			{content.projects.map((e) => {
				return (
					<Project
						title={e.title}
						description={e.description}
						tech={e.tech}
						link={e.link}
						source={e.source}
						imgSource={e.imgSource}
						key={e.title}
					/>
				);
			})}
		</div>
	);
};

export default Projects;
