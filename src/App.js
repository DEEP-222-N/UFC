import React from 'react';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import History from './components/History';
import Champions from './components/Champions';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <History />
      <Champions />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;