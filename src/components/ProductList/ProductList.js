import React from 'react';
import ProductCard from './ProductCard';

const ProductList = () => {
    return(
        <div className='product-list'>
            <ProductCard title={"Producto de muestra"} price={200} thumbnail={"http://www.carsaludable.com.ar/wp-content/uploads/2014/03/default-placeholder.png"} />
            <ProductCard title={"Producto de muestra"} price={200} thumbnail={"http://www.carsaludable.com.ar/wp-content/uploads/2014/03/default-placeholder.png"} />
        </div>
    )
}

export default ProductList;