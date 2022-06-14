import React, { FunctionComponent } from "react";
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { Link } from "react-router-dom";
import { addProductToCart } from "../../api/Cart/Carts";
import { Product } from "../../types";

const ProductDetail:FunctionComponent<Product> = ({
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
    };
    await addProductToCart(data)
  };
  return (
    <div className="product-detail">
      <div className="image-wrapper">
        <Link to='/'><span><AiOutlineArrowLeft /> Back</span></Link>
        <img src={image} />
      </div>
      <div className="product-info">
        <b>${price}</b>
        <p>{name}</p>
        <p>{description}</p>
        <button className="btn btn-primary" onClick={handleAdd}>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;
