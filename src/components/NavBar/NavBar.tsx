import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import navLinks from '../../config/nav_links.json';

function NavBar() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [transparent, setTransparent] = useState(true);

  const toggleMobileMenu = () => {
    setShowMobileNav(!showMobileNav);
  };

  useEffect(() => {
    window.onscroll = () => {
      if (!transparent && window.scrollY < 40) {
        setTransparent(true);
      } else if (transparent && window.scrollY > 40) {
        setTransparent(false);
      }
    };
  });

  const navContent = navLinks.map((link) => {
    if (link.hashLink) {
      return (
        <HashLink key={link.uri} smooth to={link.uri}>
          {link.label}
        </HashLink>
      );
    }

    if (link.external) {
      return (
        <a
          key={link.uri}
          href={link.uri}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.label}
        </a>
      );
    }

    return (
      <Link key={link.uri} to={link.uri}>
        {link.label}
      </Link>
    );
  });

  return (
    <>
      <nav
        id="nav-mobile"
        className={transparent ? 'navTransparent' : 'navWhite'}
      >
        <div className="nav-header" id="nav-mobile-header">
          <div
            className="burger"
            onClick={() => toggleMobileMenu()}
            id="burger"
          >
            <i className="icon icon-menu icon--s5" aria-hidden="true" />
          </div>
        </div>
        <div
          className={showMobileNav ? 'nav-content active' : 'nav-content'}
          id="mobile-content"
          onClick={() => toggleMobileMenu()}
        >
          <Link to="/">
            <img src="/img/logo_home.png" alt="Helvetic Speedrunners Logo" />
          </Link>
          {navContent}
        </div>
      </nav>
      <nav
        id="nav-desktop"
        className={transparent ? 'navTransparent' : 'navWhite'}
      >
        <Link to="/">
          <img src="/img/logo_home.png" alt="Helvetic Speedrunners Logo" />
        </Link>
        {navContent}
      </nav>
    </>
  );
}

export default NavBar;
