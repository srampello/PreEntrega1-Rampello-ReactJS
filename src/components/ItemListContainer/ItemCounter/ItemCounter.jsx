import React from 'react'
import { useCounter } from '../../../hooks/useCounter'
import './ItemCounter.css'

export const ItemCounter = ({initial=1, stock=5, onAdd}) => {
    const {counter, handleSumar, handleRestar} = useCounter(initial, stock)

    const handleOnAdd = () => {
        onAdd(counter)
    }

    return (
        <div>
            <div className='d-flex justify-content-center'>
                <button onClick={handleSumar} className='btn btn-dark btn-sm col-2'>+</button>
                <label className='col-2 text-center'>{counter}</label>
                <button onClick={handleRestar} className='btn btn-dark btn-sm col-2'>-</button>
            </div>
            <button onClick={handleOnAdd} className='btn mt-1 btn-dark btn-sm d-grid col-6 mx-auto'>Add to cart</button>
        </div>
    )
}
