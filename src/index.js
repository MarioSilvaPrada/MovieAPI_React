import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import MovieInfo from "./components/MovieInfo/MovieInfo";
import ActorInfo from "./components/ActorInfo/ActorInfo";
import * as serviceWorker from "./serviceWorker";

import store from "./store/store";
import { Provider } from "react-redux";

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

const router = (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/person/:personId" component={ActorInfo} />
        <Route path="/:movieId" component={MovieInfo} />
        <Route exact path="/" component={App} />
      </Switch>
    </Router>
  </Provider>
);

ReactDOM.render(router, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
