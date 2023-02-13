import './App.css';
import {Route, Switch, BrowserRouter} from "react-router-dom"; //switch es para paginado? brouserrouter aca? o en index??
import React from "react";
import LandingPage from './components/LandingPage';
//import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage}/>
      {/* <Route path="/home" component={Home}/> */}
    </div>
  );
}

export default App;
