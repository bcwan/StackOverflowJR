import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  const loggedInSignUp = () => (
    <nav className="logged-in-sign-up">
      <Link to="/signup">Please Sign Up</Link>
      <br/>
      <Link to="/login">Please Login</Link>
    </nav>
  );
  
  const notLoggedIn = () => (
    <div className="username-greeting">
      <h2 className="username">Welcome, {currentUser.username}</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );

  return currentUser ? notLoggedIn() : loggedInSignUp();
}

export default Greeting;