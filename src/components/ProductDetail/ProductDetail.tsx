import React, { FunctionComponent } from "react";
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { Link } from "react-router-dom";
import { Product } from "../../types";

const ProductDetail:FunctionComponent<Product> = ({ id, title, price, thumbnail }) => {
  return (
    <div className="product-detail">
      <div className="image-wrapper">
        <Link to='/'><span><AiOutlineArrowLeft /> Back</span></Link>
        <img src={thumbnail} />
      </div>
      <div className="product-info">
        <b>${price}</b>
        <p>{title}</p>
        <button className="btn btn-primary">Add to cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;
