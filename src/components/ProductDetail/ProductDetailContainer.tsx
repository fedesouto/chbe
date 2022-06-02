import React, { FunctionComponent } from "react";
import ProductDetail from "./ProductDetail";

const ProductDetailContainer: FunctionComponent = () => {
  return (
    <div>
      <ProductDetail
        id={1}
        title={"Producto de muestra"}
        price={200}
        thumbnail={
          "http://www.carsaludable.com.ar/wp-content/uploads/2014/03/default-placeholder.png"
        }
      />
    </div>
  );
};

export default ProductDetailContainer;
