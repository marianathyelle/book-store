import React from 'react';
 
import { Switch, Route } from 'react-router-dom';
import Browse from '../pages/browse';
import BookDetails from '../pages/bookDetails';
import Cart from '../pages/cart';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Browse} />
    <Route path="/book/:id" component={BookDetails} />
    <Route exact path="/cart" component={Cart} />
  </Switch>
);

export default Routes;