import React from "react";

const CartItem = ({ item, value }) => {
  const { id, tittle, img, price, total, count } = item;
  const { increament, decreament, removeItem } = value;
  return (
    <div className="row my-5 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2 col-xs-12">
        <img
          src={img}
          style={{ width: "5rem", height: "5rem" }}
          className="img-fluid"
          alt={tittle}
        />
      </div>
      <div className="col-10 mx-auto col-lg-2 col-xs-12">
        <span className="d-lg-none">product:</span>
        {tittle}
      </div>
      <div className="col-10 mx-auto col-lg-2 col-xs-12">
        <span className="d-lg-none">price:</span>
        {price}
      </div>
      <div className="col-10 mx-auto col-lg-2 col-xs-12 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <span className="btn btn-black mx-1" onClick={() => decreament(id)}>
              -
            </span>
            <span className="btn btn-black mx-1">{count}</span>
            <span className="btn btn-black mx-1" onClick={() => increament(id)}>
              +
            </span>
          </div>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2 col-xs-12">
        <div className="cart-icon" onClick={() => removeItem(id)}>
          <i className="fa fa-trash" />
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2 col-xs-12">
        <strong>item total : $ {total}</strong>
      </div>
    </div>
  );
};

export default CartItem;
