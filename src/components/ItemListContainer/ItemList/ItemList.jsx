import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ItemList.css'
import { Filter } from './Filter';
import { Link } from 'react-router-dom';

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
            productos.map(product => 
              <Card border='dark' key={product.id} style={{ width: '175px' }}>
                  <Card.Img variant="top" src={product.image} alt={product.alt} />
                  <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>U$D
                  {product.price}
                  </Card.Text>
                    <Link to={`/detail/${product.id}`}>
                      <Button variant="dark">Detail</Button>  
                    </Link>
                  </Card.Body>
              </Card>
              )
            :
            productos
            .filter(prod => prod.brand.includes(filterState))
            .map(product => 
              <Card border='dark' key={product.id} style={{ width: '175px' }}>
                  <Card.Img variant="top" src={product.image} alt={product.alt} />
                  <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>U$D
                  {product.price}
                  </Card.Text>
                  <Link to={`/detail/${product.id}`}>
                      <Button variant="dark">Detail</Button>  
                  </Link>
                  </Card.Body>
              </Card>
            )
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