import React from 'react';

const ProductCard = ({title, price, thumbnail}) => {
    return (
        <div className='product-card'>
            <div className='product-image-wrapper'>
                <img src={thumbnail} alt={title} />
            </div>
            <div className='product-info'>
                <b>${price}</b>
                <p>{title}</p>
            </div>
            <button className='btn btn-primary'>Add to cart</button>
        </div>
    )
}

export default ProductCard;