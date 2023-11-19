import React from 'react'
import { ItemCounter } from '../../ItemCounter/ItemCounter'

export const ItemDetail = ({product}) => {
  
const onAdd = (cantidad) =>{
    console.log(`La cantidad seleccionada es: ${cantidad}`)
}

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
            {/*<a href="#" className="btn mt-3 btn-light btn-lg">Buy</a>*/}
            <ItemCounter onAdd={onAdd}/>
          </div>
        </div>
      </div>
    </div>
  )
}
