import React from 'react'
import 'boxicons';
import './CartWidget.css'

export const CartWidget = () => {
    return (
        <div className="cartBox">
            <box-icon name="cart" className="cart" color='#FFFFFF'></box-icon>
            <span className='item_total'>0</span>
        </div>       
    )
}
