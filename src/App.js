import React from 'react';
import './App.css';
import Intro from './components/Intro/Intro';
import Nav from './components/Nav/Nav';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Intro/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
