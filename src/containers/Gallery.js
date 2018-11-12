import React from 'react';
import About from './components/sections/about';
import Events from './components/sections/events';
import Header from './components/header/gallery_header';

export default class extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <About />
        <Events />
      </div>
    );
  }
}
