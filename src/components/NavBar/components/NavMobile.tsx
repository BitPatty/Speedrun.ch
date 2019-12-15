import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function toggleActiveClass() {
  if (typeof document !== "undefined") {
    var element = document.getElementById("mobile-content");
    element?.classList.toggle("active");
    var burger = document.getElementById("burger");
    burger?.classList.toggle("active");
  }
}

function NavMobile() {
  return (
    <nav id="nav-mobile" className="navTransparent">
      <div className="nav-header" id="nav-mobile-header">
        <div className="burger" onClick={() => toggleActiveClass()} id="burger">
          <i className="icon icon-menu icon--s5" aria-hidden="true" />
        </div>
      </div>
      <div
        className="nav-content"
        id="mobile-content"
        onClick={() => toggleActiveClass()}
      >
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
      </div>
    </nav>
  );
}

export default NavMobile;
