import React from 'react';
import { withSiteData } from 'react-static';
import About from './components/sections/about';
import Events from './components/sections/events';
import Header from './components/header/header';

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
