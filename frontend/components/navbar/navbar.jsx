import React from 'react';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { withRouter } from "react-router-dom";

const NavBar = ({ history }, { currentUser, logout } ) => {
  // localhost:3000/api/questions/search?search=Leetcode+moon
  const redirectToSearchPage = () => {
    let input = document.getElementById("search-bar-text").value;
    let parse = input.split(" ").join("+")
    return history.push(`/search?search=${parse}`);
  };

  //profile button and logout button
  const loggedInButtons = () => (
    <div className="auth-btn-set">
      <Button variant="success">
        {currentUser ? currentUser.username : "Profile"}
      </Button>
      <Link to="/">
        <Button variant="dark" onClick={logout}>
          Log out
        </Button>
      </Link>
    </div>
  );

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
      <Link to="/">
        <img
          className="stackoverflow-logo"
          src="/assets/stackoverflowjr.png"
          alt=""
        />
      </Link>
      <nav className="header-nav">
        <form onSubmit={redirectToSearchPage}>
          <input
            className="search-bar"
            id ="search-bar-text"
            type="text"
            placeholder=" Search...press enter"
          />
          {user ? loggedInHTML : notLoggedInHTML}
        </form>
      </nav>
    </header>
  );

  return navBarDesign(currentUser, loggedInButtons(), notLoggedInButtons());
};

export default withRouter(NavBar);