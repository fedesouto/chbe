import React, { FunctionComponent, useEffect, useState } from "react";
import { getCart } from "../../api/Cart/Carts";
import { useCart } from "../../contexts/CartContext";
import { Product } from "../../types";
import CartProduct from "./CartProduct";
import { useUser } from "../../contexts/UserContext";
import Swal from "sweetalert2";
import { Bars } from "react-loader-spinner";

const CartContainer: FunctionComponent = () => {
  const { cart, setCart, submitOrder } = useCart();
  const { user, resetCartId, setUser } = useUser();
  const [loading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const data = await getCart(user.currentCart);
        setUser({...user, currentCart: data._id})
        setCart(data);
      } catch (error) {
        setCart(null);
      }
      setIsLoading(false);
    })();
  }, []);

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await submitOrder();
      if (response.success) {
        resetCartId()
        setCart(null)
        setIsLoading(false)
        Swal.fire("Gracias por su compra!");
      }
    } catch (error) {
      Swal.fire({
        title: "Ocurrió un error",
        icon: "error",
        text: `Error: ${error}`,
      });
    }
  };

  if (loading)
    return (
      <Bars
        height="80"
        width="80"
        color="#3f51b5"
        ariaLabel="bars-loading"
        wrapperStyle={{ justifyContent: "center", marginTop: "5rem" }}
        wrapperClass=""
        visible={true}
      />
    );
  if (!cart || !cart.products.length)
    return (
      <h2 style={{ textAlign: "center", marginTop: "2rem" }}>
        El carrito está vacío.
      </h2>
    );
  return (
    <div>
      <h1 style={{ margin: "1rem", fontSize: "2.5rem" }}>cart</h1>
      <div>
        {cart.products.map((product: any) => {
          const {product: prod, quantity} = product
          const {
            _id,
            name,
            description,
            image,
            price,
            stock,
          } = prod;
          return (
            <CartProduct
              key={_id}
              _id={_id}
              name={name}
              description={description}
              image={image}
              price={price}
              stock={stock}
              setIsLoading={setIsLoading}
              quantity={quantity}
            />
          );
        })}
      </div>
      <div style={{ maxWidth: "300px", margin: "auto" }}>
        <button className="btn btn-success" onClick={handleSubmit}>
          Finalizar pedido
        </button>
      </div>
    </div>
  );
};

export default CartContainer;
