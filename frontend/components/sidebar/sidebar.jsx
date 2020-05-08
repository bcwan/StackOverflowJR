import React from 'react';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import { Search } from 'react-bootstrap-icons';


const SideBar = ( { currentUser } ) => {

  const sideBarDesign = () => (
    <section className="sidebar list-group">
      <ListGroup variant="flush">
        <ListGroup.Item className="side-item"><Link to="/">Home</Link></ListGroup.Item> 
      </ListGroup>
      <p className="sidebar-p">PUBLIC</p>
      <aside className="public-sidebar">
        <ListGroup variant="flush">
          <ListGroup.Item className="side-item">
            <Search /><Link to="/questions">Stack Overflow Jr</Link></ListGroup.Item>
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