import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from '../src/components/Login';
import Dashboard from '../src/components/Dashboard';
import Profile from '../src/components/Profile';

export default (
    <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='/dashboard' component={Dashboard}/>
        <Route path='/profile' component={Profile}/>
    </Switch>
)