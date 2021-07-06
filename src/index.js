import React, { useState } from 'react';
import { render } from 'react-dom';
import{ BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Result from './pages/Result';
import Login from './pages/Login';
import Votingpage from './pages/Votingpage';
import Signup from './pages/Signup';
import Adminlogin from './pages/Adminlogin';
import Admin from './pages/Admin';
import Addmember from './pages/Addmember';
import Addmember1 from './pages/Addmember1';
import sucessfull from './pages/sucessfull';
const VotingApp = () => {
return ( 
  <Router>
    <div>
      <Switch>
        <Route exact path = "/" component = {Home} />
        <Route path="/result" component = {Result} /> 
        <Route path="/login" component = {Login} />
        <Route path="/votepage" component = {Votingpage} />
        <Route path="/signup" component = {Signup} />
        <Route path="/adminlogin" component = {Adminlogin} />
        <Route path="/admin" component = {Admin} />
        <Route path="/addmember" component = {Addmember} />
        <Route path="/addmember1" component = {Addmember1} />
        <Route path="/sucessfull" component = {sucessfull} />
      </Switch>

    </div>

  </Router>
  );
};



render(<VotingApp />, document.querySelector("#root"));
