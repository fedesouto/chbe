import React, { FunctionComponent } from 'react';
import {FiXCircle} from 'react-icons/fi'
import {Product} from '../../types'

interface CartProduct extends Product {
    quantity: number
}

const CartProduct: FunctionComponent<Product> = ({
    id,
    timestamp,
    name,
    description,
    code,
    image,
    price,
    stock,
  }) => {
    return(
        <div className='cart-product'>
            <div className='image-wrapper'>
                <img src={image}/>
            </div>
            <div className='product-info'>
                <b>$ {price}</b>
                <p>{name}</p>
                <em>{description}</em>
            </div>
            <div>
                <FiXCircle/>
            </div>
        </div>
    )
}

export default CartProduct;