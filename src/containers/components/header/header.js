import React from 'react';
import { HashLink } from 'react-router-hash-link';

export default class extends React.Component {
  render() {
    return (
      <header className="header--home">
        <div className="content-container">
          <h1>Helvetic Speedrunners</h1>
          <h2>The Swiss Speedrunning Community</h2>
          <HashLink smooth to="/#events">
            <button className="button-ghost">View our events</button>
          </HashLink>
        </div>
      </header>
    );
  }
}
