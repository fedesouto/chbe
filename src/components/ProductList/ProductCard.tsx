import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { addProductToCart } from "../../api/Cart/Carts";
import { Product } from "../../types";

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
      <button className="btn btn-primary">Add to cart</button>
    </div>
  );
};

export default ProductCard;
