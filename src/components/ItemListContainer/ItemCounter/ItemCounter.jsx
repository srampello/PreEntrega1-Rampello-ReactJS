import React from 'react'
import { useState } from "react"
import { useCounter } from '../../../hooks/useCounter'
import './ItemCounter.css'

export const ItemCounter = ({initial=1, stock=5, onAdd}) => {
    const {counter, handleSumar, handleRestar} = useCounter(initial, stock)

    const handleOnAdd = () => {
        onAdd(counter)
    }

    return (
        <div>
            <button onClick={handleSumar} className='btn mt-2 btn-light btn-lg'>+</button>
            <label className='m-2'>{counter}</label>
            <button onClick={handleRestar} className='btn mt-2 btn-light btn-lg'>-</button>
            <button onClick={handleOnAdd} className='btn mt-2 btn-light btn-lg'>Add to cart</button>
        </div>
    )
}
