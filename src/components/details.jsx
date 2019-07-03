import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            company,
            img,
            info,
            price,
            tittle,
            inCart
          } = value.Detail;
          return (
            <div className="container py-5">
              {/* tittle */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue">
                  <h2>{tittle}</h2>
                </div>
              </div>
              {/* Cloth Image */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img
                    src={img}
                    className="img-fluid"
                    style={{ height: "25rem", width: "100%" }}
                    alt={tittle}
                  />
                </div>
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h3>Model : {tittle}</h3>
                  <h4 className="text-tittle text-uppercase text-muted mt-3 mb-2">
                    Made By : <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      Price : <span>$</span>
                      {price}
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    some info about the cloth :
                  </p>
                  <p className="text-muted lead">{info}</p>
                  <div>
                    <Link to="/">
                      <ButtonContainer>Back To Product</ButtonContainer>
                    </Link>
                    <ButtonContainer
                      mycolor
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.add(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? "inCart" : "add to cart"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
