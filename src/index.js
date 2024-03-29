import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import "./App.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Productprovider } from "./context";

ReactDOM.render(
  <Productprovider>
    <Router>
      <App />
    </Router>
  </Productprovider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
