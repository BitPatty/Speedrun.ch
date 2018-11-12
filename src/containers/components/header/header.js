import React from 'react';
import { Link } from 'react-router-dom';

export default class extends React.Component {
  render() {
    return (
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
  }
}
