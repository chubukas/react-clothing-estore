import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Chart from "./components/cart/chart";
import Default from "./components/default.jsx";
import Details from "./components/details.jsx";
import Productlist from "./components/productlist";
import Model from "./components/model";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Productlist} />
          <Route path="/details" component={Details} />
          <Route path="/chart" component={Chart} />
          <Route component={Default} />
        </Switch>
        <Model />
      </React.Fragment>
    );
  }
}
