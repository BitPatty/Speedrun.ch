import React from 'react';
import Header from './components/header/gallery_header';
import Gallery from './components/sections/gallery';

export default class extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <section>
          <div class="content-container">
            <h2>
              Helvetic Speedrunners <span>Marathon #1</span>
            </h2>
            <div class="full-width">
              Photos taken by{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/restful_64"
              >
                Restful64
              </a>
              !
            </div>
            <Gallery />
          </div>
        </section>
      </div>
    );
  }
}
