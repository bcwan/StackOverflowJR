import React from 'react';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import { Search } from 'react-bootstrap-icons';


const SideBar = ( { currentUser } ) => {



  const sideBarDesign = (user) => (
    <section className="sidebar list-group">
      <ListGroup variant="flush">
        {
          user ? 
            (<ListGroup.Item className="side-item">Home</ListGroup.Item>) 
            : 
            (<ListGroup.Item className="side-item">Splash</ListGroup.Item>)
        }
      </ListGroup>
      <p className="sidebar-p">PUBLIC</p>
      <aside className="public-sidebar">
        <ListGroup variant="flush">
          <ListGroup.Item className="side-item">
            <Search />Stack Overflow Jr</ListGroup.Item>
          <ListGroup.Item className="indent-side-item">Tags</ListGroup.Item>
          <ListGroup.Item className="indent-side-item">User</ListGroup.Item>
          <ListGroup.Item className="indent-side-item">Jobs</ListGroup.Item>
        </ListGroup>

      </aside>
    </section>

  );

  return sideBarDesign(currentUser);

};

export default SideBar;