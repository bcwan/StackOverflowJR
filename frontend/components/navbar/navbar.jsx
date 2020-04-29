import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = ( { currentUser, login, logout, signup } ) => {
  const loggedInSignUp = () => (
    <nav class="header-nav">
      
    </nav>
  );

  const notLoggedIn = () => (
    <nav class="header-nav">

    </nav>
  );

  const navBarDesign = (user, loggedInSignUp, notLoggedIn) => (
    <header class="header">
      <img src="/images/stackoverflowjr.jpg" alt=""/>
      {
        user ? loggedInSignUp : notLoggedIn
      }
    </header>
  );

  return navBarDesign(currentUser, loggedInSignUp(), notLoggedIn());
};

export default NavBar;