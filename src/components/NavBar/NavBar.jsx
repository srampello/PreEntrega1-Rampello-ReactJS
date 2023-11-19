import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';


export const NavBar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top p-0">
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
                                <ul class="dropdown-menu">
                                    <li>
                                        <NavLink to='/category/sneaker/Nike' className={({ isActive })=> isActive ? 'btn btn-light dropdown-item' : 'btn btn-dark dropdown-item'}>
                                            Nike
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/category/sneaker/Jordan' className={({ isActive })=> isActive ? 'btn btn-light dropdown-item' : 'btn btn-dark dropdown-item'}>
                                            Jordan
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/category/sneaker/Yeezy' className={({ isActive })=> isActive ? 'btn btn-light dropdown-item' : 'btn btn-dark dropdown-item'}>
                                            Yeezy
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/category/sneaker/Adidas' className={({ isActive })=> isActive ? 'btn btn-light dropdown-item' : 'btn btn-dark dropdown-item'}>
                                            Adidas
                                        </NavLink>
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
