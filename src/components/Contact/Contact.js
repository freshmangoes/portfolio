/** @format */

import React from 'react';
import './Contact.css';

const Contact = () => {
	return (
		<div className='contact-container'>
			<h3>Contact</h3>
			<div className='contact-item'>
				<a className='contact-item' href='mailto:kylecilia@icloud.com'>
					Email
				</a>
				<span> \\ </span>
				<a className='contact-item' href='https://linkedin.com/in/kylecilia'>
					LinkedIn
				</a>
				<span> \\ </span>
				<a className='contact-item' href='https://github.com/freshmangoes'>
					Gitub
				</a>
			</div>
		</div>
	);
};

export default Contact;
