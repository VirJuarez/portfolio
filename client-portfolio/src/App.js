import './App.css';
import {Route, Routes} from "react-router-dom"; 
import React from "react";
import LandingPage from './components/LandingPage';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import ContactMe from './components/ContactMe';
import Projects from './components/Projects';
import Chat from './components/Chat';



function App() {
  return (
    <React.Fragment>
      <Routes>
      <Route path="/" element={<LandingPage />}/>
      <Route path="/about" element={<AboutMe/>}/>
      <Route path="/skills" element={<Skills/>}/>
      <Route path="/contact" element={<ContactMe/>}/>
      <Route path="/projects" element={<Projects/>}/>
      </Routes>
    </React.Fragment>
      
  );
}


export default App;
