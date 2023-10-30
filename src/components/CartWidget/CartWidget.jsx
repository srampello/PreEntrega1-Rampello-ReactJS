import React from 'react'
import 'boxicons';

export const CartWidget = () => {
    return (
        <div className="cart">
            <box-icon name="cart"></box-icon>
            <span className='item_total'>0</span>
        </div>       
    )
}
