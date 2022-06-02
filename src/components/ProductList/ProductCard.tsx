import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Product } from "../../types";


const ProductCard: FunctionComponent<Product> = ({id, title, price, thumbnail }) => {
  return (
    <div className="product-card">
      <Link to="/detail">
        <div className="product-image-wrapper">
          <img src={thumbnail} alt={title} />
        </div>
      </Link>
      <Link to="/detail">
      <div className="product-info">
        <b>${price}</b>
        <p>{title}</p>
      </div></Link>
      <button className="btn btn-primary">Add to cart</button>
    </div>
  );
};

export default ProductCard;
