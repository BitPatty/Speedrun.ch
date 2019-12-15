import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import NavBar from "./components/NavBar";

import Home from "./containers/Home";
import Gallery from "./containers/Gallery";

import "./styles/main.scss";
import { HashRouter, Switch, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div>
      <HashRouter>
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
          </Switch>
          {/*<Footer />*/}
        </div>
      </HashRouter>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
