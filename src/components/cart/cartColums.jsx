import React from "react";
const CartColums = () => {
  return (
    <div className="container-fluid text-center d-none d-md-block">
      <div className="row">
        <div className="col-10 mx-auto col-lg-2 col-xs-12">
          <p className="text-uppercase">products</p>
        </div>
        <div className="col-10 mx-auto col-lg-2 col-xs-12">
          <p className="text-uppercase">name of product</p>
        </div>
        <div className="col-10 mx-auto col-lg-2 col-xs-12">
          <p className="text-uppercase">price</p>
        </div>
        <div className="col-10 mx-auto col-lg-2 col-xs-12">
          <p className="text-uppercase">quantity</p>
        </div>
        <div className="col-10 mx-auto col-lg-2 col-xs-12">
          <p className="text-uppercase">remove</p>
        </div>
        <div className="col-10 mx-auto col-lg-2 col-xs-12">
          <p className="text-uppercase">total</p>
        </div>
      </div>
    </div>
  );
};

export default CartColums;
