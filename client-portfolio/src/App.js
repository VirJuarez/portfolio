import './App.css';
import {Route} from "react-router-dom"; 
import React from "react";


function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage}/>
      <Route path="/aboutme" component={AboutMe}/>
    </div>
  );
}


export default App;
