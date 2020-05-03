import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = ( { currentUser } ) => {

  const sideBarDesign = (user) => (
    <section className="sidebar">
      {
        user ? <a href="#home">Home</a> : <a href="#splash">Home</a>
      }
      <a href="#home">Home</a>
      <aside className="public-sidebar">
        <a href="#stackoverflow">Stack Overflow Jr.</a>
        <a href="#tags">Tags</a>
        <a href="#users">User</a>
        <a href="#jobs">Jobs</a>
      </aside>
    </section>

  );

  return sideBarDesign(currentUser);

};

export default SideBar;