import React from 'react'
import './ItemList.css'
import { Item } from '../Item/Item';

export const ItemList = ({product}) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: '10px',
      justifyContent: 'center'
  }}>
      {product.map(product => <Item key={product.id} product={product}/>)}
    </div>
  )
}