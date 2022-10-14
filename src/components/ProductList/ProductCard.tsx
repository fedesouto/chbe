import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { addProductToCart } from "../../api/Cart/Carts";
import { Product } from "../../types";
import Swal from "sweetalert2";
import { useUser } from "../../contexts/UserContext";
import {baseUrl} from "../../api/config";

const ProductCard: FunctionComponent<Product> = ({
  _id,
  name,
  image,
  price,
}) => {
  const { user, setUser } = useUser();
  const handleAdd = async () => {
    const data = {
      product: _id,
      quantity: 1,
    };
    const json = await addProductToCart(data, user.currentCart);
    console.log(json)
   /*  if (!user.cartId) {
      setUser({ ...user, cartId: json });
      const body = { cartId: json };
      console.log(body);
      const response = await fetch(`${baseUrl}api/session/user/${user.id}/cart`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const status = await response.json();
    } */
    Swal.fire({ text: "Producto agregado al carrito!" });
  };
  return (
    <div className="product-card">
      <Link to={`/products/${_id}`}>
        <div className="product-image-wrapper">
          <img src={image} alt={name} />
        </div>
      </Link>
      <Link to={`/${_id}`}>
        <div className="product-info">
          <b>${price}</b>
          <p>{name}</p>
        </div>
      </Link>
      <button className="btn btn-primary" onClick={handleAdd}>
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
