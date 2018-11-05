import * as React from 'react';
import {Switch} from 'react-router-dom';

import Login from '../containers/Login';
import Albums from '../containers/Albums';
import Posts from '../containers/Posts';
import Home from '../containers/Home';
import AuthLayout from '../containers/AuthLayout';
import PortalLayout from '../containers/PortalLayout';
import PrivateRoute from './PrivateRoute';
import AuthRoute from './AuthRoute';

const renderWithPortalLayout = (Component) => (props) => (
  <PortalLayout { ...props }>
    <Component { ...props } />
  </PortalLayout>
);

const renderWithAuthLayout = (Component) => (props) => (
  <AuthLayout { ...props }>
    <Component { ...props } />
  </AuthLayout>
);

function Routes() {
  return (
    <Switch>
      <AuthRoute exact path="/login" render={renderWithAuthLayout(Login)}/>
      <PrivateRoute exact path="/albums" render={renderWithPortalLayout(Albums)}/>
      <PrivateRoute exact path="/posts" render={renderWithPortalLayout(Posts)}/>
      <PrivateRoute path="/" render={renderWithPortalLayout(Home)}/>
    </Switch>
  );
}

export default Routes;