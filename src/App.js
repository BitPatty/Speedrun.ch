import React from 'react';
import { Router, Link } from 'react-static';
import { hot } from 'react-hot-loader';
import Routes from 'react-static-routes';
import NavBar from './containers/components/navigation/navbar';
import Header from './containers/components/header/header';
import Footer from './containers/components/footer/footer';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <main>
            <Routes />
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default hot(module)(App);
