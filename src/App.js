import React, { Component } from 'react';
import './App.less';
import {HashRouter as Router} from "react-router-dom";
import{Route,Switch} from "react-router";


import Nav from "./component/Nav/Nav";





class App extends Component {
  render() {
    return (
      <div className="App">
       <Router>
         <Switch>
           <Route path="/" component={Nav} />
         </Switch>
       </Router>
      </div>
    );
  }
}

export default App;
