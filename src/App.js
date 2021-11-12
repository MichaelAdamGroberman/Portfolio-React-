import './App.css';
import { useState } from 'react';
// import components to main view
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Work from './components/Work';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {


  return (
    <Router>

      <Nav />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
