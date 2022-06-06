import React, { FunctionComponent } from 'react';
import {FiXCircle} from 'react-icons/fi'
import {Product} from '../../types'

interface CartProduct extends Product {
    quantity: number
}

const CartProduct: FunctionComponent = () => {
    return(
        <div className='cart-product'>
            <div className='image-wrapper'>
                <img src=""/>
            </div>
            <div className='product-info'>
                <b>$ {}</b>
                <p>{}</p>
                <em>{}</em>
            </div>
            <div>
                <FiXCircle/>
            </div>
        </div>
    )
}

export default CartProduct;