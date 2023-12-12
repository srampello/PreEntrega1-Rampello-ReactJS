import React from 'react'
import 'boxicons';
import './CartWidget.css'
import { useCartContext } from '../../context/CartContext';

export const CartWidget = () => {
    const {totalCant} = useCartContext()
    return (
        <div className="cartBox">
            <box-icon name="cart" className="cart" color='#FFFFFF'></box-icon>
            <span className='item_total'>{totalCant()}</span>
        </div>       
    )
}
