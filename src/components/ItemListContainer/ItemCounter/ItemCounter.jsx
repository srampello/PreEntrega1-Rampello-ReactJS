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
        <div className="mx-5">
            <button onClick={handleSumar}>+</button>
            <label >{counter}</label>
            <button onClick={handleRestar}>-</button>
            <button onClick={handleOnAdd}>Buy</button>
        </div>
    )
}
