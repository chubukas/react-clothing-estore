import React, { Component } from "react";
import Tittle from "../tittle";
import CartColums from "./cartColums";
import EmptyCart from "./emptycart";
import { ProductConsumer } from "../../context";
import CartList from "./cartlist";
import CartTotals from "./cartotal.jsx";

export default class Chart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Tittle name="your " tittle="cart" />
                  <CartColums />
                  <CartList value={value} />
                  <CartTotals value={value} />
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}
