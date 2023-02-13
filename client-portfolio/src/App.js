import './App.css';
import {Route, Routes} from "react-router-dom"; 
import React from "react";
import LandingPage from './components/LandingPage';


function App() {
  return (
    <React.Fragment>
      <Routes>
      <Route path="/" element={<LandingPage />}/>
      {/* <Route path="/aboutme" component={AboutMe}/> */}
      </Routes>
    </React.Fragment>
  );
}


export default App;
