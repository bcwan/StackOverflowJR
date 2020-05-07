import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'react-bootstrap-icons';

class HomeComponent extends React.Component {
  render() {
    return (
      <section className="splash-page-container">
        <div className="splash-page-top">
          <section className="splash-page-text">
            <Search className="search-icon-splash"/>
            <div className="splash-title-block">
              <h1 className="splash-page-title">We love people who code</h1>
              <p className="splash-page-p">A place where people can ask and answer questions.</p>
            </div>
          </section>
        </div>
        <div className="splash-page-desc">
          
        </div>
      </section>
    )
  }
}

export default HomeComponent;