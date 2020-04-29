import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = ( { currentUser, logout } ) => {
  //profile button and logout button
  const loggedInButtons = () => (
    <div className="auth-btn-set">
      <Link to="/profile">
        <button>Profile</button>
      </Link>
      <button onClick={logout}>Log out</button>
    </div>
  );

  //login and signup buttons
  const notLoggedInButtons = () => (
    <div className="auth-btn-set">
      <Link to="/login">
        <button>Log in</button>
      </Link>
      <Link to="/signup">
        <button>Sign up</button>
      </Link>
    </div>
  );

  const navBarDesign = (user, loggedInHTML, notLoggedInHTML) => (
    <header className="header">
      <nav className="header-nav">
        <img className="stackoverflow-logo" src="/assets/stackoverflowjr.jpg" alt="" />
        <input type="text" placeholder="Search..." />
        {
          user ? loggedInHTML : notLoggedInHTML
        }
      </nav>
    </header>
  );

  return navBarDesign(currentUser, loggedInButtons(), notLoggedInButtons());
};

export default NavBar;