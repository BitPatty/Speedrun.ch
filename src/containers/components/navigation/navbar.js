import React from 'react';
import NavMobile from './nav_mobile';
import NavDesktop from './nav_desktop';

export default class extends React.Component {
  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', function() {
        if (pageYOffset > 150) {
          document.getElementById('nav-desktop').className = 'navWhite';
          document.getElementById('nav-mobile').className = 'navWhite';
        } else {
          document.getElementById('nav-desktop').className = 'navTransparent';
          document.getElementById('nav-mobile').className = 'navTransparent';
        }
      });
    }
  }

  render() {
    return (
      <div>
        <NavDesktop />
        <NavMobile />
      </div>
    );
  }
}
