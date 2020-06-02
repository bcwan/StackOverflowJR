import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

class HomeComponent extends React.Component {
  render() {
    return (
      <section className="splash-page-container">
        <div className="splash-page-top">
          <embed id="hero-image" src="/assets/hero-image.svg" 
               alt="stackoverflow-splash"/>
          <section className="splash-page-text">
            <div className="splash-title-block">
              <h1 className="splash-page-title">We love people who code</h1>
              <p className="splash-page-p">A place where people can ask and answer questions.</p>
              <Link to="/questions">
                <Button variant="light">See Questions</Button>
              </Link>
            </div>
          </section>
        </div>
        <div className="splash-page-desc">
          <div className="desc-top">
            <h2 className="desc-top-title">For Developers, by Brian Wan</h2>
            <div className="bar-pill"></div>
          </div>
          <div className="desc-bottom">

          </div>
        </div>
      </section>
    )
  }
}

export default HomeComponent;