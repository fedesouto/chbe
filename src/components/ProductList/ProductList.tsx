import React, { FunctionComponent } from "react";
import Filters from "./Filters";
import ProductCard from "./ProductCard";
import Searchbar from "./Searchbar";

const ProductList: FunctionComponent = () => {
  return (
    <div>
      <Searchbar />
      <Filters />
      <div className="product-list">
        <ProductCard
          id={1}
          title={"Producto de muestra"}
          price={200}
          thumbnail={
            "http://www.carsaludable.com.ar/wp-content/uploads/2014/03/default-placeholder.png"
          }
        />
        <ProductCard
          id={2}
          title={"Producto de muestra"}
          price={200}
          thumbnail={
            "http://www.carsaludable.com.ar/wp-content/uploads/2014/03/default-placeholder.png"
          }
        />
      </div>
    </div>
  );
};

export default ProductList;
