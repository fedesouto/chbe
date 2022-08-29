import React, { FunctionComponent } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import { addProductToCart } from "../../api/Cart/Carts";
import { Product } from "../../types";
import Swal from "sweetalert2";
import { useUser } from "../../contexts/UserContext";
import baseUrl from "../../api/config";

const ProductDetail: FunctionComponent<Product> = ({
  id,
  timestamp,
  name,
  description,
  code,
  image,
  price,
  stock,
}) => {
  const { user, setUser } = useUser();
  const handleAdd = async () => {
    const data = {
      id,
      timestamp,
      name,
      description,
      code,
      image,
      price,
      stock,
      quantity: 1,
    };
    const json = await addProductToCart(data, user.cartId);
    if (!user.cartId) {
      setUser({ ...user, cartId: json });
      const body = { cartId: json };
      console.log(body);
      const response = await fetch(`${baseUrl}api/session/user/${user.id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const status = await response.json();
    }
    Swal.fire({ text: "Producto agregado al carrito!" });
  };
  return (
    <div className="product-detail">
      <div className="image-wrapper">
        <Link to="/">
          <span>
            <AiOutlineArrowLeft /> Back
          </span>
        </Link>
        <img src={image} />
      </div>
      <div className="product-info">
        <b>${price}</b>
        <p>{name}</p>
        <p>{description}</p>
        <button className="btn btn-primary" onClick={handleAdd}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
