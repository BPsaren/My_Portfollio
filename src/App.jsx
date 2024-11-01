// src/App.jsx
import React from 'react';
import Navbar from './NavBar/NavBar'; // Importing the Navbar component
import Home from './Components/Pages/Home'; // Importing the Home component
import About from './Components/Pages/About'; // Importing the About component
import Projects from './Components/Pages/Projects'; // Importing the Projects component
import Contact from './Components/Pages/Contact'; // Importing the Contact component
import './App.css'; // Importing global CSS for styling

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
