import React from 'react';

import './css/App.css';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import Bio from './components/Bio';
import Social from './components/Social';
import Works from './components/Works';
import Agenda from './components/Agenda';
import Credits from './components/Credits';

const App = () => (
  <div className="App">
    <Hero />
    <Navigation />
    <Bio />
    <Social />
    <Works />
    <Agenda />
    <Credits />
  </div>
);

export default App;
