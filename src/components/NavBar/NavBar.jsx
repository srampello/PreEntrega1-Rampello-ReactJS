import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget';
import iceClubLogo from '../Image/iceclublogo.png';


export const NavBar = () => {
  return (
    <header >
        <a href="#">
            <div className='logo'>
                <img src={iceClubLogo} alt="logo" width="100"/>
            </div>
        </a>
        <ul>
            <li>
                <a href="#" style={{textDecoration: 'none', color: 'black'}}>Sneakers</a>
            </li>
            <li>
                <a href="#" style={{textDecoration: 'none', color: 'black' }}>Electronics</a>
            </li>
        </ul>
        <CartWidget/>
    </header>
  )
}
