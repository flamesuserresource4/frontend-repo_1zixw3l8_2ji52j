import React from 'react';
import Hero from './components/Hero';
import CharacterGrid from './components/CharacterGrid';
import AboutDerry from './components/AboutDerry';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white">
      <Hero />
      <CharacterGrid />
      <AboutDerry />
      <Footer />
    </div>
  );
};

export default App;
