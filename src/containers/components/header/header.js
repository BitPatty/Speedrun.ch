import React from 'react';
import { Link } from 'react-static';

export default () => (
  <header className="header--home">
    <div className="content-container">
      <h1>Helvetic Speedrunners</h1>
      <h2>The Swiss Speedrunning Community</h2>
      <Link to="/#events">
        <button className="button-ghost">View our events</button>
      </Link>
    </div>
  </header>
);
