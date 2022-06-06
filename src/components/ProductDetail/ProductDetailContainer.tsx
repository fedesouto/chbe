import React, { FunctionComponent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../../api/Products/Products";
import { Product } from "../../types";
import ProductDetail from "./ProductDetail";

const ProductDetailContainer: FunctionComponent = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState<Product>(null);
  useEffect(() => {
    (async () => {
      const data = await getSingleProduct(productId);
      setProduct(data);
    })();
  });
  if (!product) return null;

  const { id, timestamp, name, description, code, image, price, stock } =
    product;
  return (
    <div>
      <ProductDetail
        id={id}
        timestamp={timestamp}
        name={name}
        description={description}
        code={code}
        image={image}
        price={price}
        stock={stock}
      />
    </div>
  );
};

export default ProductDetailContainer;
