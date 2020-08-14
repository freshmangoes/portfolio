import React from 'react';
import './App.css';
import Intro from './components/Intro/Intro';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Intro/>
    </div>
  );
}

export default App;
