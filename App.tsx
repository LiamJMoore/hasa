import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Game from './components/Game';
import Tokenomics from './components/Tokenomics';
import Footer from './components/Footer';

function App() {
  return (
    <main className="min-h-screen relative font-sans text-black bg-chill-bg overflow-x-hidden selection:bg-chill-shoes selection:text-white">
      <Nav />
      <Hero />
      <Marquee />
      <Game />
      <About />
      <Tokenomics />
      <Footer />
    </main>
  );
}

export default App;