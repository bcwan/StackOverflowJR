import React from 'react';
import { connect } from 'react-redux'
import { Redirect, Route, withRouter } from 'react-router-dom'

const mSTP = state => ({
  loggedIn: Boolean(state.session.id != null)
});

//when users logged in, they won't see the component
//looks like this  <AuthRoute path="" component{} />
const Auth = ({ loggedIn, path, component: Component }) => (
  <Route 
    path={path}
    render={props => (
      loggedIn ? <Redirect to="/" /> : <Component {...props} />
    )}
  />
);

//if logged in, display component, else, redirect to signup
const Protected = ({ loggedIn, path, component: Component }) => (
  <Route
    path={path}
    render={props => (
      loggedIn ? <Component {...props} /> : <Redirect to="/signup" />
    )}
  />
);

//makes sure user is logged in to access component, else, redirect to login
const LoggedIn = ({ loggedIn, path, component: Component }) => (
  <Route
    path={path}
    render={props => (
      loggedIn ? <Component {...props} /> : <Redirect to="/login" />
    )}
  />
);

export const AuthRoute = withRouter(connect(mSTP)(Auth));
export const ProtectedRoute = withRouter(connect(mSTP)(Protected));
export const LoggedInRoute = withRouter(connect(mSTP)(LoggedIn));