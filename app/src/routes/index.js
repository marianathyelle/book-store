import React from 'react';
 
import { Switch, Route } from 'react-router-dom';
import Browse from '../pages/browse';
import BookDetails from '../pages/bookDetails';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Browse} />
    <Route path="/book/:id" component={BookDetails} />
  </Switch>
);

export default Routes;