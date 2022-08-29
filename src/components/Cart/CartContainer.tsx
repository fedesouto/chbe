import React, { FunctionComponent, useEffect, useState } from "react";
import { getCart } from "../../api/Cart/Carts";
import { useCart } from "../../contexts/CartContext";
import { Product } from "../../types";
import CartProduct from "./CartProduct";
import { useUser } from "../../contexts/UserContext";
import Swal from "sweetalert2";

const CartContainer: FunctionComponent = () => {
  const { cart, setCart, submitOrder } = useCart();
  const {user} = useUser()
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const data = await getCart(user.cartId);
      setCart(data);
      setLoading(false);
    })();
  }, [cart]);


  const handleSubmit = async () => {
    try {
      const response = await submitOrder()
      if(response.ok) {
        setCart(null)
        Swal.fire('Gracias por su compra!')
      }
    } catch (error) {
      Swal.fire({title: 'Ocurrió un error', icon: 'error', text: `Error: ${error}`})
    }
  }

  if (loading) return null;
  if (!cart || !cart.productos.length) return <h2 style={{textAlign: 'center', marginTop: '2rem'}}>El carrito está vacío.</h2>;
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
      <button className="btn btn-success" onClick={handleSubmit}>Finalizar pedido</button>
    </div>
  );
};

export default CartContainer;
