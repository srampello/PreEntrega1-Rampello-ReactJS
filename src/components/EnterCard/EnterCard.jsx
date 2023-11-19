import React from 'react'
import './EnterCard.css'
import { Link } from 'react-router-dom'


export const EnterCard = () => {
  return (
    <div>
        <div className="card w-75 mx-auto border border-0">
            <img src="https://i.ibb.co/SXjkXt7/SNEAKER-GUIDE-OPENER.jpg" className="card-img" alt="..."/>
            <div className="card-img-overlay">
                <h3 className="card-title ">Sneaker Catalog</h3>
                <Link to='/category/sneaker'>
                    <button type='button' className='btn btn-outline-secondary'>Shop Now</button>
                </Link>
                
            </div>
        </div>
    </div>
    
  )
}
