import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css'

const category = [
    {id: '1', name: 'Nike', path: 'Nike'},
    {id: '2', name: 'Jordan', path: 'Jordan'},
    {id: '3', name: 'Yeezy', path: 'Yeezy'},
    {id: '4', name: 'Adidas', path: 'Adidas'}
]

export const NavBar = () => {
  return (
    <>
        <nav className="navbar navbar-dark bg-dark sticky-top p-0">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand">
                <img src="https://i.ibb.co/ykLMktY/iceclublogo.png" alt="iceClubLogo" width={75}/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel"><img src="https://i.ibb.co/ykLMktY/iceclublogo.png" alt="iceClubLogo" width={50}/></h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item m-2">
                                <NavLink to='/' className={({ isActive })=> isActive ? 'btn btn-light' : 'btn btn-dark'} aria-current="page">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item m-2 dropdown">
                                <NavLink to='/category/sneaker' className={({ isActive })=> isActive ? 'btn btn-light dropdown-toggle' : 'btn btn-dark dropdown-toggle' } role="button" data-bs-toggle="dropdown" aria-expanded="false" aria-current="page">
                                    Sneakers
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li>
                                        {category.map(category => <NavLink key={category.id} className={({ isActive })=> isActive ? 'btn btn-light dropdown-item' : 'btn btn-dark dropdown-item'} to={`/category/${category.path}`}>{category.name}</NavLink>)}
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        <Link to='/cart'>
            <CartWidget/>
        </Link>
    </>
  )
}
