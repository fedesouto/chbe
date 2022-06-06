import React, { FunctionComponent, useState, useEffect } from "react";
import { getAll } from "../../api/Products/Products";
import { Product } from "../../types";
import Filters from "./Filters";
import ProductCard from "./ProductCard";
import Searchbar from "./Searchbar";

const ProductList: FunctionComponent = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    (async () => {
      const data = await getAll();
      if (typeof products === "object") setProducts(data);
    })();
  }, []);
  return (
    <div>
      <Searchbar />
      <Filters />
      <div className="product-list">
        {products.map((product) => {
          const {
            id,
            timestamp,
            name,
            description,
            code,
            image,
            price,
            stock,
          } = product;
          return (
            <ProductCard
              id={id}
              timestamp={timestamp}
              name={name}
              description={description}
              code={code}
              image={image}
              price={price}
              stock={stock}
              key={id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
