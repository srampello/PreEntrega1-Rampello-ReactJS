import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ItemList.css'
import { Filter } from './Filter';
import { Link } from 'react-router-dom';
import { Item } from '../Item/Item';

const productFiltered = ({productos, filterState, handleFilterChange}) => (
  <>
    {<div className="galeria">
        <input 
          onClick={handleFilterChange}
          type="image" 
          value="Nike"
          placeholder='Nike'
          src="https://i.ibb.co/TqjGV8P/nike.png"
          alt='nikeLogo'
          width="100px"
        />
        <input 
          onClick={handleFilterChange}
          type="image" 
          value="Jordan"
          placeholder='Jordan'
          alt='jordanLogo'
          src="https://i.ibb.co/BVNmpdg/Jumpman-logo.png"
          width="100px"
        />
        <input 
          onClick={handleFilterChange}
          type="image" 
          value="Yeezy"
          placeholder='Yeezy'
          alt='yeezyLogo'
          src="https://i.ibb.co/VHXr8pd/yeezy-Logo.png"
          width="100px"
        />
        <input 
          onClick={handleFilterChange}
          type="image" 
          value="Adidas"
          placeholder='Adidas'
          alt='adidasLogo'
          src="https://i.ibb.co/gRhVNmf/adidas.png"
          width="100px"
        />          
    </div>}
    <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '10px',
        justifyContent: 'center'
    }}>
      {filterState === ''
            ?
            productos.map(product => <Item key={product.id} product={product}/>)
            :
            productos
            .filter(prod => prod.brand.includes(filterState))
            .map(product => <Item key={product.id} product={product}/>)
      }
    </div>
  </>
)

export const ItemList = ({productos}) => {
  return (
    <Filter productos={productos}>
      {productFiltered}
    </Filter>
  )
}