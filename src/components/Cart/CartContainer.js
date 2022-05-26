import React from "react";
import CartProduct from "./CartProduct";

const CartContainer = () => {
  return (
    <div>
      <h1 style={{ margin: "1rem", fontSize: "2.5rem" }}>cart</h1>
      <div>
        <CartProduct
          title={"Producto de muestra"}
          price={200}
          thumbnail={
            "http://www.carsaludable.com.ar/wp-content/uploads/2014/03/default-placeholder.png"
          }
          quantity={3}
        />
        <CartProduct
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
