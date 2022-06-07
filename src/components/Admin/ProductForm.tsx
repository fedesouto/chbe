import React, { FunctionComponent, useState } from "react";
import { addProduct } from "../../api/Products/Products";

const ProductForm: FunctionComponent = () => {
  const [productData, setProductData] = useState<object>({
    name: "",
    description: "",
    code: 0,
    image: "",
    price: 0,
    stock: 0,
  });
  const inputs = [
    { name: "name", type: "text" },
    { name: "description", type: "text" },
    { name: "code", type: "number" },
    { name: "image", type: "url" },
    { name: "price", type: "number" },
    { name: "stock", type: "number" },
  ];
  const handleChange = (event: { target: { name: any; value: any } }) => {
    setProductData({ ...productData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    await addProduct(productData);
  };
  return (
    <div>
      <h1 style={{ margin: "1rem", fontSize: "2.5rem" }}>add product</h1>
      <form className="product-form" onSubmit={handleSubmit}>
        {inputs.map(({ name, type }) => {
          return (
            <div className="input-group" key={name}>
              <label htmlFor={`input-${name}`}>{name}</label>
              <input
                required
                onChange={handleChange}
                id={`input-${name}`}
                name={name}
                type={type}
              />
            </div>
          );
        })}
        <input
          className="btn btn-primary"
          type="submit"
          value="Agregar producto"
        />
      </form>
    </div>
  );
};

export default ProductForm;
