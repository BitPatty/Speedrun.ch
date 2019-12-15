import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function NavDesktop() {
  return (
    <nav id="nav-desktop" className="navTransparent">
      <Link to="/">
        <img src="/img/logo_home.png" alt="Helvetic Speedrunners Logo" />
      </Link>
      <HashLink smooth to="/#about">
        About Us
      </HashLink>
      <HashLink smooth to="/#events">
        Events
      </HashLink>
      <Link to="/gallery">Gallery</Link>
      <a href="mailto:contact@speedrun.ch">Contact</a>
    </nav>
  );
}

export default NavDesktop;