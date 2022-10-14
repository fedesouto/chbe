import React, { ComponentState, FunctionComponent, SetStateAction } from "react";
import { FiXCircle } from "react-icons/fi";
import { deleteProductFromCart, getCart } from "../../api/Cart/Carts";
import { useCart } from "../../contexts/CartContext";
import { Product } from "../../types";
import Swal from "sweetalert2";
import { useUser } from "../../contexts/UserContext";


interface CartProduct extends Product {
  quantity: number;
  setIsLoading: React.Dispatch<SetStateAction<boolean>>
}

const CartProduct: FunctionComponent<CartProduct> = ({
  _id,
  quantity,
  name,
  description,
  image,
  price,
  setIsLoading
}) => {
  const { cart, setCart } = useCart();
  const {user} = useUser()
  const handleDelete = async () => {
    const confirmation = await Swal.fire({
      text: "¿Desea eliminar el producto del carrito?",
      confirmButtonText: "Si",
      showDenyButton: true,
      denyButtonText: "No",
    });
    if (confirmation.value) {
      await deleteProductFromCart(_id, cart._id);
      setCart(await getCart(cart._id));
    }
  };

  return (
    <div className="cart-product">
      <div className="image-wrapper">
        <img src={image} />
      </div>
      <div className="product-info">
        <b>{quantity}x $ {price}</b>
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
