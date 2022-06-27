import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { addProductToCart } from "../../api/Cart/Carts";
import { Product } from "../../types";
import Swal from "sweetalert2";

const ProductCard: FunctionComponent<Product> = ({
  id,
  timestamp,
  name,
  description,
  code,
  image,
  price,
  stock,
}) => {
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
    await addProductToCart(data);
    Swal.fire({ text: "Producto agregado al carrito!" });
  };
  return (
    <div className="product-card">
      <Link to={`/products/${id}`}>
        <div className="product-image-wrapper">
          <img src={image} alt={name} />
        </div>
      </Link>
      <Link to={`/${id}`}>
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
