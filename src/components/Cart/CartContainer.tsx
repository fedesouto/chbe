import React, { FunctionComponent, useEffect, useState } from "react";
import { getCart } from "../../api/Cart/Carts";
import { useCart } from "../../contexts/CartContext";
import { Product } from "../../types";
import CartProduct from "./CartProduct";

const CartContainer: FunctionComponent = () => {
  const { cart, setCart } = useCart();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const data = await getCart();
      setCart(data);
      setLoading(false);
    })();
  }, []);

  if (loading) return null;

  return (
    <div>
      <h1 style={{ margin: "1rem", fontSize: "2.5rem" }}>cart</h1>
      <div>
        {cart.productos.map((product: Product) => {
          const {
            id,
            timestamp,
            name,
            description,
            code,
            image,
            price,
            stock,
          } = product;
          return (
            <CartProduct
              key={id}
              id={id}
              timestamp={timestamp}
              name={name}
              description={description}
              code={code}
              image={image}
              price={price}
              stock={stock}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CartContainer;
