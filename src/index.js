import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Switch, Route } from "react-router-dom";
import NavBar from "./containers/components/navigation/navbar";
import Footer from "./containers/components/footer/footer";
import Home from "./containers/Home";
import Gallery from "./containers/Gallery";
import Err404 from "./containers/404";

import "./stylesheets/main.scss";

class App extends React.Component {
  render() {
    return (
      <div>
        <HashRouter onUpdate={() => window.scrollTo(0, 0)}>
          <div>
            <NavBar />
            <Switch>
              <Route
                exact
                path="/gallery"
                render={() => {
                  document.title = "Helvetic Speedrunners - Gallery";
                  return <Gallery />;
                }}
              />
              <Route
                path="/"
                render={() => {
                  document.title = "Helvetic Speedrunners - Home";
                  return <Home />;
                }}
              />
              <Route
                path="/"
                render={() => {
                  document.title = "Helvetic Speedrunners - Page Not Found";
                  return <Err404 />;
                }}
              />
            </Switch>
            <Footer />
          </div>
        </HashRouter>
      </div>
    );
  }
}

if (typeof document !== "undefined") {
  ReactDOM.render(<App />, document.getElementById("root"));
}
