import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Item = ({product}) => {
  return (
    <Card border='dark' style={{ width: '175px' }}>
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
