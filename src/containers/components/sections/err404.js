import React from 'react';

export default class extends React.Component {
  render() {
    return (
      <section id="err404">
        <div className="content-container">
          <h2>Page not found</h2>
          <div className="full-width center">
            <h3>404</h3>
            <p>This site could not be found.</p>
          </div>
        </div>
      </section>
    );
  }
}
