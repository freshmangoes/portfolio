/** @format */

import React from 'react';
import Project from './Project/Project';
import projects from './projects.json';

const Projects = () => {
	return (
		<div>
			{projects.data.map((e) => {
				return (
					// console.log(e.title)
					<Project
						title={e.title}
						description={e.description}
						tech={e.tech}
						link={e.link}
						source={e.source}
						key={e.title}
					/>
				);
			})}
		</div>
	);
};

export default Projects;
