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
              <h1 className="splash-page-title">We love people who are curious</h1>
              <p className="splash-page-p">A place where people can ask and answer questions.</p>
              <Link to="/questions">
                <Button variant="light">See Questions</Button>
              </Link>
            </div>
          </section>
        </div>
        <div className="splash-page-desc">
          <div className="desc-top">
            <h2 className="desc-top-title">For any user, by Brian Wan</h2>
            <div className="bar-pill"></div>
            <div className="desc-top-text">
              <p className="p-desc-top-text">This is a StackOverflow inspired full stack application. Built within two weeks, this
                                             app allows provides a platform for users to find solutions to their curiosities.
              </p>
            </div>
          </div>
          <div className="desc-bottom">
            <div className="desc-bottom-1">

            </div>
            <div className="desc-bottom-2">

            </div>
            <div className="desc-bottom-3">

            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default HomeComponent;