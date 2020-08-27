/** @format */

import React from 'react';
import './Contact.css';

const Contact = () => {
	return (
		<div className='contact-container'>
      <h3>
        Contact
      </h3>
			<p className='contact-item'> 
				<a href='mailto:kylecilia@icloud.com'>Email</a>
			</p>
			<p className='contact-item'>
				<a href='https://linkedin.com/in/kylecilia'>LinkedIn</a>
			</p>
			<p className='contact-item'>
				<a href='https://github.com/freshmangoes'>Gitub</a>
			</p>
		</div>
	);
};

export default Contact;
