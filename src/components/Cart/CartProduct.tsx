import React, { FunctionComponent } from "react";
import { FiXCircle } from "react-icons/fi";
import { deleteProductFromCart, getCart } from "../../api/Cart/Carts";
import { useCart } from "../../contexts/CartContext";
import { Product } from "../../types";
import Swal from "sweetalert2";

interface CartProduct extends Product {
  quantity: number;
}

const CartProduct: FunctionComponent<Product> = ({
  _id,
  timestamp,
  name,
  description,
  code,
  image,
  price,
  stock,
}) => {
  const { cart, setCart } = useCart();
  const handleDelete = async () => {
    const confirmation = await Swal.fire({
      text: "¿Desea eliminar el producto del carrito?",
      confirmButtonText: "Si",
      showDenyButton: true,
      denyButtonText: "No",
    });
    if (confirmation.value) {
      await deleteProductFromCart(_id, cart.id);
      setCart(await getCart());
    }
  };

  return (
    <div className="cart-product">
      <div className="image-wrapper">
        <img src={image} />
      </div>
      <div className="product-info">
        <b>$ {price}</b>
        <p>{name}</p>
        <em>{description}</em>
      </div>
      <div className="delete-product" onClick={handleDelete}>
        <FiXCircle />
      </div>
    </div>
  );
};

export default CartProduct;
