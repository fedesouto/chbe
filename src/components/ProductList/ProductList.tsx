import React, { FunctionComponent, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAll } from "../../api/Products/Products";
import { useUser } from "../../contexts/UserContext";
import { Product } from "../../types";
import Filters from "./Filters";
import ProductCard from "./ProductCard";
import Searchbar from "./Searchbar";

const ProductList: FunctionComponent = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const { user, setUser } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    const userdata = JSON.parse(sessionStorage.getItem("userdata"));

    if (!user) {
      if (userdata) {
        setUser(userdata);
      } else {
        navigate("/login");
      }
    }
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
