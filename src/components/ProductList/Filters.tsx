import React, { Dispatch, FunctionComponent, useState } from "react";
import { BiSortAlt2, BiFilter } from "react-icons/bi";
import { getAll, getByCategory } from "../../api/Products/Products";
import { Product } from "../../types";

type Props = {
  setProducts: Dispatch<React.SetStateAction<Product[]>>;
};
const Filters: FunctionComponent<Props> = ({ setProducts }) => {
  const [showFilter, setShowFilter] = useState(false);
  const categories = ["Test", "Cars", "Sports", "Reset"];
  const handleCategoryClick = async (event: any) => {
    const category = event.target.textContent;
    if (category === "Reset") {
      const products = await getAll();
      setProducts(products);
    } else {
      const products = await getByCategory(category);
      setProducts(products);
    }
    setShowFilter(false);
  };
  return (
    <div className="filter-sorter">
      <button className="btn" onClick={() => setShowFilter(!showFilter)}>
        Filter <BiFilter />
      </button>
      <div
        className="categories"
        style={!showFilter ? { display: "none" } : { display: "flex" }}
      >
        {categories.map((category) => (
          <li key={category} onClick={handleCategoryClick}>
            {category}
          </li>
        ))}
      </div>
      <button className="btn">
        Sort <BiSortAlt2 />
      </button>
    </div>
  );
};

export default Filters;
