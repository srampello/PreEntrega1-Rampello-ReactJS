import React, { useEffect, useState } from 'react'
import { mProducts } from '../../../helpers/products'
import { useParams } from 'react-router-dom'

export const ItemDetail = () => {
  const [product, setProduct] = useState({})
  const {pid} = useParams()

  useEffect(()=>{
    mProducts(pid)
      .then(res => setProduct(res))
      .catch(err => console.log('Error: ', err))
  }, [])

  return (
    <div className="card col-8 position-absolute top-50 start-50 translate-middle text-bg-dark">
      <div className="row g-0">
        <div className="col-md-6 text-center">
          <img src={product.image} alt={product.alt} className="img-fluid rounded-start"/>
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <p className="card-text font-monospace">{product.brand}</p>
            <h5 className="card-title font-monospace">{product.name}</h5>
            <h4 className='font-monospace'>${product.price}</h4>
            <a href="#" class="btn mt-3 btn-light btn-lg">Buy</a>
          </div>
        </div>
      </div>
    </div>
  )
}