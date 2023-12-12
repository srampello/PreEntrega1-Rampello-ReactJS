import React from 'react'
import { Link } from 'react-router-dom'
import './EnterCard.css'

export const BannerBrand = () => {
  return (
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <Link to='/category/Nike'>
                <button type="button" class="btn btn-outline-light btn-sm position-absolute top-50 start-50 translate-middle">Shop Now</button>
              </Link>
              <img src="https://i.ibb.co/r3GMH6k/nike.jpg" class="d-block w-100" alt="nikebanner"/>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <Link to='/category/Jordan'>
                <button type="button" class="btn btn-outline-light btn-sm position-absolute top-50 start-50 translate-middle">Shop Now</button>
              </Link>
              <img src="https://i.ibb.co/bBfBBCT/Jordan.jpg" class="d-block w-100" alt="jordanbanner"/>
            </div>
            <div className="carousel-item">
              <Link to='/category/Yeezy'>
                <button type="button" class="btn btn-outline-light btn-sm position-absolute top-50 start-50 translate-middle">Shop Now</button>
              </Link>
              <img src="https://i.ibb.co/bscTCq6/yeezybanner.jpg" class="d-block w-100" alt="yeezybanner"/>
            </div>
            <div className="carousel-item">
              <Link to='/category/Adidas'>
                <button type="button" class="btn btn-outline-light btn-sm position-absolute top-50 start-50 translate-middle">Shop Now</button>
              </Link>
              <img src="https://i.ibb.co/h1DNqSG/adidas1.jpg" class="d-block w-100" alt="adidasbanner"/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
    </div>
  )
}
