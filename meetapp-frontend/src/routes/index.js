import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Dashboard from '~/pages/Dashboard';
import Details from '~/pages/Details';
import New from '~/pages/New';
import Profile from '~/pages/Profile';
import Edit from '~/pages/Edit';

function Routes() {
  return (
    <Switch>
      <Route path="/" component={SignIn} exact />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/meetup/new" component={New} isPrivate exact />
      <Route path="/meetup/:id" component={Details} isPrivate />
      <Route path="/meetup/:id/edit" component={Edit} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
    </Switch>
  );
}

export default Routes;
