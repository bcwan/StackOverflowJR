import React from 'react';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

const NavBar = ( { currentUser, logout } ) => {
  //profile button and logout button
  const loggedInButtons = () => (
    <div className="auth-btn-set">
      <Link to="/profile">
        <Button variant="success">{currentUser ? currentUser.username : "Profile"}</Button>
      </Link>
      <Link to="/">
        <Button variant="dark" onClick={logout}>Log out</Button>
      </Link>
     
    </div>
  );

  //login and signup buttons
  const notLoggedInButtons = () => (
    <div className="auth-btn-set">
      <Link to="/login">
        <Button variant="success">Log in</Button>
      </Link>
      <Link to="/signup">
        <Button variant="primary">Sign up</Button>
      </Link>
    </div>
  );

  const navBarDesign = (user, loggedInHTML, notLoggedInHTML) => (
    <header className="header">
      <Link to="/"><img className="stackoverflow-logo" src="/assets/stackoverflowjr.png" alt="" /></Link>
      <nav className="header-nav">
     
        <input className="search-bar" type="text" placeholder=" Search..." />
        {
          user ? loggedInHTML : notLoggedInHTML
        }

      </nav>
    </header>
  );

  return navBarDesign(currentUser, loggedInButtons(), notLoggedInButtons());
};

export default NavBar;