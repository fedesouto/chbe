import React, { FunctionComponent } from "react";
import CartProduct from "./CartProduct";

const CartContainer: FunctionComponent = () => {
  return (
    <div>
      <h1 style={{ margin: "1rem", fontSize: "2.5rem" }}>cart</h1>
      <div>
        <CartProduct
          id={1}
          title={"Producto de muestra"}
          price={200}
          thumbnail={
            "http://www.carsaludable.com.ar/wp-content/uploads/2014/03/default-placeholder.png"
          }
          quantity={3}
        />
        <CartProduct
          id={2}
          title={"Producto de muestra"}
          price={200}
          thumbnail={
            "http://www.carsaludable.com.ar/wp-content/uploads/2014/03/default-placeholder.png"
          }
          quantity={3}
        />
      </div>
    </div>
  );
};

export default CartContainer;
