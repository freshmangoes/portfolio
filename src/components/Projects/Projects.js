import React from 'react'
import Project from './Project/Project'

const Projects = () => {
  return (
    <div>
      <Project
        title='Moto Weather'
        description='A FULL STACK WEB APPLICATION WITH THE AIM TO HELP MOTORCYCLE RIDERS ADAPT TO THEIR TRIPS.'
        tech='NODEJS, REACT, REACT-MAP-GL, DECK.GL, MONGO/MONGOOSE, EXPRESS, MAPBOX APIS, OPENWEATHER API'
      />

      <Project
        title='Brewery Browser'
        description='
        A simple, single page web application designed to make finding a brewery or alehouse in a target location an easy experience.'
        tech='Vanilla HTML, CSS, Javascript/jQuery, Firebase, Mapbox CDN & APIs, and OpenBreweryDB API.'
      />
    </div>
  )
}

export default Projects
