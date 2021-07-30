import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import FirstPage from "./Component/FirstPage/FirstPage";
import Home from "./Component/Home/Home";
import './App.css';
import Stories from "./Component/Stories/Stories";
const  App = () =>  {
  return (
      <div className="">
          <Router>
              <Switch>
                  <Route exact  path="/" component={FirstPage}/>
                  <Route path="/home" component={Home}/>
                  <Route path="/stories" component={Stories}/>
              </Switch>
          </Router>
      </div>


  );
}

export default App;
