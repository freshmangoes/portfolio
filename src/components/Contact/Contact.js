/** @format */

import React from 'react';
import content from '../../content.json';

const Contact = () => {
	return (
		<div className='contact-container'>
			<h4>Contact</h4>
			<div className='contact-item'>
				<a
					className='contact-item hvr-float'
					href={`mailto:${content.contact.email}`}
				>
					Email
				</a>
				<span> \\ </span>
				<a className='contact-item hvr-float' href={content.contact.linkedin}>
					LinkedIn
				</a>
				<span> \\ </span>
				<a className='contact-item hvr-float' href={content.contact.github}>
					Gitub
				</a>
			</div>
			<div className='cr'>© 2020 {content.intro.name}</div>
		</div>
	);
};

export default Contact;
