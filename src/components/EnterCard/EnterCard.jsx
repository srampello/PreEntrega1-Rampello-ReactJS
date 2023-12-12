import React from 'react'
import './EnterCard.css'
import { Link } from 'react-router-dom'
import { BannerBrand } from './BannerBrand'

export const EnterCard = () => {
  return (
    <div>
        <div className="card-catalog border border-0 catalog my-2">
            <img src="https://i.ibb.co/nBX58kM/feet-sneakers-tiles-wallpaper-preview.jpg" alt="..."/>
            <div className="card-img-overlay">
                <h3 className="card-title mt-2 ms-2 fw-bold text-light">Sneakers's Catalog</h3>
                <Link to='/category'>
                    <button type='button' className='btn btn-outline-light ms-2'>Shop Now</button>
                </Link>
            </div>
        </div>
        <BannerBrand/>
    </div>
    
  )
}
