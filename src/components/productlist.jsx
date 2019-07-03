import React, { Component } from "react";
import Product from "./product.jsx";
import Tittle from "./tittle";
import { ProductConsumer } from "../context";

export default class Productlist extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Tittle name="our" tittle=" products" />

            <div className="row">
              <ProductConsumer>
                {value => {
                  return value.myproducts.map(productop => {
                    return <Product key={productop.id} productop={productop} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
