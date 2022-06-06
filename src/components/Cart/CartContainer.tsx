import React, { FunctionComponent } from "react";
import CartProduct from "./CartProduct";

const CartContainer: FunctionComponent = () => {
  return (
    <div>
      <h1 style={{ margin: "1rem", fontSize: "2.5rem" }}>cart</h1>
      <div>
        <CartProduct />
        <CartProduct />
      </div>
    </div>
  );
};

export default CartContainer;
