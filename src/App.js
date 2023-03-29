import React from 'react';

// import components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';


const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Skills />
      <About />
      <Portfolio />
      <Services />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
