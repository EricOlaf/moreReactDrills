import React from 'react';
import {Switch, Route} from 'react-router-dom';


import Home from './Components/Home';
import Signup from './Components/Signup';
import Details from './Components/Details';

export default(
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/details" component={Details}/>
    </Switch>
)