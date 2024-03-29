import React, { Component } from "react";

export default class Default extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text-center text-tittle text-uppercase pt-5">
            <h1 className="display-3">404</h1>
            <h2>Page Not Found</h2>
            <h3>
              The Requested URL{" "}
              <span className="text-danger">
                {this.props.location.pathname}
              </span>{" "}
              Was Not Found
            </h3>
          </div>
        </div>
      </div>
    );
  }
}
