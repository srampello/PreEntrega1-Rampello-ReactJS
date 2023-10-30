import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function ItemListContainer(props){
  return (
    <>
      <Card border='dark' key={props.id} style={{ width: '175px' }}>
        <Card.Img variant="top" src={props.image} alt={props.alt} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
          {props.price}
          </Card.Text>
          <Button variant="dark">Buy</Button>
        </Card.Body>
      </Card>
    </>
  )
}
