import React, { useContext, useState } from 'react'
import { ItemCounter } from '../../ItemCounter/ItemCounter'
import { CartContext } from '../../../../context/CartContext'
import { Link } from 'react-router-dom'

export const ItemDetail = ({product}) => {
  const [isCounter, setIsCounter] = useState(true)
  const {addProduct, cartList} = useContext(CartContext)

  const onAdd = (cantidad) =>{
      addProduct({...product, cantidad})
      setIsCounter(false)
  }

  return (
    <div className="card w-50 mx-auto">
      <img src={product.image} alt={product.alt} className="w-50 rounded-start mx-auto"/>
      <div className="card-body">
        <h5 className="card-title">{product.brand}</h5>
        <p className="card-text">{product.name}</p>
        <p className='font-monospace'>U$D{product.price}</p>
        {
          isCounter ?
            <ItemCounter onAdd={onAdd}/>
          :
          <>
          <div className='d-grid gap-2 col-8 mx-auto'>
            <Link className="btn btn-dark btn-sm" to='/cart'>Terminar Compra</Link>
            <Link className="btn btn-dark btn-sm" to='/category'>Seguir Comprando</Link>
          </div>
            
          </>
        }
      </div>
    </div>
  )
}