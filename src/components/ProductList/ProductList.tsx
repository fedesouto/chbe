import React, { FunctionComponent, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAll } from "../../api/Products/Products";
import { getUserData } from "../../api/Sessions/Sessions";
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
        getUserData(setUser)
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
      <Filters setProducts={setProducts}/>
      <div className="product-list">
        {products.map((product) => {
          const {
            _id,
            name,
            description,
            image,
            price,
            stock,
          } = product;
          return (
            <ProductCard
              _id={_id}
              name={name}
              description={description}
              image={image}
              price={price}
              stock={stock}
              key={_id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
