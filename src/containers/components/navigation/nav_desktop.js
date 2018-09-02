import React from 'react';
import { Link } from 'react-static';

export default class extends React.Component {
  render() {
    return (
      <nav id="nav-desktop" className="navTransparent">
        <Link exact to="/">
          <img src="/img/logo_home.png" />
        </Link>
        <Link to="/#about">About Us</Link>
        <Link to="/#events">Events</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="mailto:contact@speedrun.ch">Contact</Link>
      </nav>
    );
  }
}
