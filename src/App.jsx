import React from 'react';
import Navbar from './components/navbar/Navbar.jsx';
import Hero from './components/hero/Hero.jsx';
import About from './components/about/About.jsx';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
