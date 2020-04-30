import React from 'react';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

const NavBar = ( { currentUser, logout } ) => {
  //profile button and logout button
  const loggedInButtons = () => (
    <div className="auth-btn-set">
      <Link to="/profile">
        <Button variant="primary">Profile</Button>
      </Link>
      <Button variant="primary" onClick={logout}>Log out</Button>
    </div>
  );

  //login and signup buttons
  const notLoggedInButtons = () => (
    <div className="auth-btn-set">
      <Link to="/login">
        <Button variant="primary">Log in</Button>
      </Link>
      <Link to="/signup">
        <Button variant="primary">Sign up</Button>
      </Link>
    </div>
  );

  const navBarDesign = (user, loggedInHTML, notLoggedInHTML) => (
    <header className="header">
      <img className="stackoverflow-logo" src="/assets/stackoverflowjr.png" alt="" />
      <nav className="header-nav">
     
        <input className="search-bar" type="text" placeholder="Search..." />
        {
          user ? loggedInHTML : notLoggedInHTML
        }

      </nav>
    </header>
  );

  return navBarDesign(currentUser, loggedInButtons(), notLoggedInButtons());
};

export default NavBar;