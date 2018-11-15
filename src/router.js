import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home';
import Sobre from './pages/Sobre';

const Router = () => (
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/sobre" component={Sobre} />
    </Switch>
    </BrowserRouter>
);

export default Router;