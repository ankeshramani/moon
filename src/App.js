import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import FirstPage from "./Component/FirstPage/FirstPage";
import Home from "./Component/Home/Home";
import Stories from "./Component/Stories/Stories";
import StoriesDetils from './Component/Stories/StoriesDetils'
import About from './Component/About/About'
import Enquire from "./Component/Enquire/Enquire";
import './App.css';


const  App = () =>  {
  return (
      <div className="">
          <Router>
              <Switch>
                  <Route exact  path="/" component={FirstPage}/>
                  <Route path="/home" component={Home}/>
                  <Route path="/stories/:id" component={StoriesDetils}/>
                  <Route path="/stories" component={Stories}/>
                  <Route path="/about" component={About}/>
                  <Route path="/enquire" component={Enquire}/>
              </Switch>
          </Router>
      </div>


  );
}

export default App;
