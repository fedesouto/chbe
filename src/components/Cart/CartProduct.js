import React from 'react';
import {FiXCircle} from 'react-icons/fi'

const CartProduct = ({id, title, price, thumbnail, quantity}) => {
    return(
        <div className='cart-product'>
            <div className='image-wrapper'>
                <img src={thumbnail}/>
            </div>
            <div className='product-info'>
                <b>$ {price}</b>
                <p>{title}</p>
                <em>{quantity}</em>
            </div>
            <div>
                <FiXCircle/>
            </div>
        </div>
    )
}

export default CartProduct;