import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './containers/components/navigation/navbar';
import Footer from './containers/components/footer/footer';
import Home from './containers/Home';
import Gallery from './containers/Gallery';
import Err404 from './containers/404';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <NavBar />
            <Switch>
              <Route
                exact
                path="/"
                render={() => {
                  document.title = 'Helvetic Speedrunners - Home';
                  return <Home />;
                }}
              />
              <Route
                exact
                path="/gallery"
                render={() => {
                  document.title = 'Helvetic Speedrunners - Gallery';
                  return <Gallery />;
                }}
              />
              <Route
                path="/"
                render={() => {
                  document.title = 'Helvetic Speedrunners - Page Not Found';
                  return <Err404 />;
                }}
              />
            </Switch>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

if (typeof document !== 'undefined') {
  ReactDOM.render(<App />, document.getElementById('root'));
}
