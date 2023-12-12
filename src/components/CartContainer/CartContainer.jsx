import React from 'react'
import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

export const CartContainer = () => {
  const {cartList,  vaciarCart, totalPrecio, removeItem} = useCartContext()

  return (
    <div>
      {cartList.map(product =>  <div className="border border-0 mx-auto" key={product.id}>
                                    <div className="row">
                                      <div className="col-6 text-end">
                                        <img className='' src={product.image} alt={product.alt} />
                                      </div>
                                      <div className="col-6 m-auto">
                                        <div className="card-body row">
                                          <div className="col-8">
                                            <p>{product.brand}</p>
                                            <h5 className="card-title">{product.name}</h5>
                                            <p className="card-text">Cant: {product.cantidad}</p>
                                            <p className="card-text">Price: U$D {product.price}</p>
                                          </div>
                                          <div className="col-4 my-auto">
                                            <button className='btn btn-outline-danger' onClick={() => removeItem(product.id)} > X </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div> 
      )}
      {
        cartList.length > 0 ?
          <div className='card text-center w-50 mx-auto border border-0'>
            <h2 className='fs-5 fw-semibold'>Total Price: U$D {totalPrecio()}</h2>
            <button className='btn btn-outline-danger mx-auto' onClick={vaciarCart}>Vaciar Carrito</button>
            <button className='btn mx-auto'><Link to='/checkout' className='text-decoration-none btn btn-outline-dark'>Finalizar compra</Link></button>
            
          </div> :
          <div className='text-center mt-3 card mx-auto w-50'>
            <h2 className='text-danger'>Empty Cart!</h2>
            <Link className="btn btn-dark btn-sm" to='/category'>Go Shopping</Link>
          </div>

            
      }
    </div>
  )
}
