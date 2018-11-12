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
            <Gallery />
          </div>
        </section>
      </div>
    );
  }
}
