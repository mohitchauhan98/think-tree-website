import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Values from './components/Values/Values';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Projects />
      <Values />
      <Footer />
    </div>
  );
}

export default App;
