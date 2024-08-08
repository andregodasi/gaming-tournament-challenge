import React from 'react';
import { Switch } from 'react-router-dom';
import Champion from '../pages/Champion/Champion';
import Home from '../pages/Home';
import SelectGames from '../pages/SelectGames';
import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path='/' exact component={Home} />
    <Route path='/games' exact component={SelectGames} />
    <Route path='/champion' exact component={Champion} />
  </Switch>
);

export default Routes;
