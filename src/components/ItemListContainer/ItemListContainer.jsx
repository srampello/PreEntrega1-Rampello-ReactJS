import React from 'react'
import { useEffect } from 'react';
import { mProducts } from '../../helpers/products';
import { useState } from 'react';
import { ItemList } from './ItemList/ItemList';
//import { ItemCounter } from './ItemCounter/ItemCounter';

export function ItemListContainer(){
    const [productos, setProductos] = useState([])
    useEffect(()=>{
      mProducts()
        .then(result => setProductos(result))
        .catch(err => console.log(err))
    })


  return (
    <>
      {/*<ItemCounter/>*/}
      <ItemList productos={productos}/>
    </>
  )
}
