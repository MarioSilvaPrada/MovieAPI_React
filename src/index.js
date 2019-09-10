import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import MovieInfo from "./components/MovieInfo";
import * as serviceWorker from "./serviceWorker";

import store from "./store/store";
import { Provider } from "react-redux";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

const router = (
  <Provider store={store}>
    <Router>
      <Switch>
        {/* <Redirect from="/" to="/" /> */}
        <Route path="/:movieId" component={MovieInfo} />
        <Route exact path="/" render={props=> (
          <App />
        )} />

      </Switch>
    </Router>
  </Provider>
);

ReactDOM.render(router, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
