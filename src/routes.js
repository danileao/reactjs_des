import React from 'react';
import { Switch, Route } from 'react-router-dom';


import Session from './pages/Session';

export default function Routes() {
  return (
    <Switch>
      <Route path="/:id" exact component={Session} />
      <Route path="/" exact component={Session} />
    </Switch>
  )
}
