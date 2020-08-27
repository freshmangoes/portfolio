/** @format */

import React from 'react';
import Project from './Project/Project';
import Contact from '../Contact/Contact';

const Projects = () => {
	return (
		<div>
			<Project
				title='Moto Weather'
				description='A full, MERN stack, web application with the aim to help motorcycle riders adapt to the changing weather.'
        tech='NodeJS, React, react-map-gl, Deck.gl, Mongo/Mongoose, Express, Mapbox APIs, Openweather API'
        link='https://moto-weather.herokuapp.com/'
			/>

			<Project
				title='Weekend Warrior'
				description='A tool meant for hikers and campers to look up the conditions and weather, local to a hiking trail.'
        tech='NodeJS, Express, Handlebars, MySQL/Sequelize, HikingProject API, OpenWeather API'
        link='https://the-weekend-warrior.herokuapp.com/'
			/>

      <Project 
        title='New York Times Scraper'
        description='A single page, MERN based scraper for the New York Times world page.'
        tech='Mongo/Mongoose, Express, React, NodeJS, Bootstrap'
        link='https://nyt-scraper-kcilia.herokuapp.com/'
      />

			<Project
				title='Brewery Browser'
				description='
        A simple, single page web application designed to make finding a brewery or alehouse in a target location an easy experience.'
        tech='Vanilla HTML, CSS, Javascript/jQuery, Firebase, Mapbox CDN & APIs, and OpenBreweryDB API.'
        link='https://freshmangoes.github.io/project-1'
			/>

			<Project
				title='Trivia! Broken Car Edition'
				description='A trivia game, featuring a theme of a broken car!'
        tech='Vanilla HTML, CSS, Javascript/jQuery'
        link='https://freshmangoes.github.io/TriviaGame/'
			/>

			<Project
				title='Hangman - Broken Car Edition!'
				description='A word guess game, featuring a theme of common wear parts on a car.'
				tech='Vanilla HTML, Bootstrap/CSS, Javascript'
			/>

			<Project
				title='Crystals Collector'
				description='A strategic guessing game, where the player has to reach a goal score to win with the psuedorandom values assigned, but hidden, at the start of the game.'
        tech='Vanilla HTML, Bootstrap/CSS, Javascript/jQuery'
        link='https://freshmangoes.github.io/unit-4-game/'
			/>

			<Project
				title='Giphy Search'
				description='A Giphy API search client. The user can add search buttons and click on them to search the Giphy API. Displays the rating and a still image of the gif, which the user can click to toggle animation.'
        tech='Vanilla HTML, Bootstrap, Javascript/jQuery'
        link='https://freshmangoes.github.io/giphy-search/'
			/>
		</div>
	);
};

export default Projects;
