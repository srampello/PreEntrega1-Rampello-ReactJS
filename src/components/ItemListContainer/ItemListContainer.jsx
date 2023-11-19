import React from 'react'
import { useEffect } from 'react';
import { mProducts } from '../../helpers/products';
import { useState } from 'react';
import { ItemList } from './ItemList/ItemList';
import { useParams } from 'react-router-dom';

export function ItemListContainer(){
  const [productos, setProductos] = useState([])
  const {bid} = useParams()

  useEffect(()=>{
    if (bid) {
      mProducts()
      .then(result => setProductos(result.filter(product => product.brand === bid)))
      .catch(err => console.log(err))
    } else {
      mProducts()
      .then(result => setProductos(result))
      .catch(err => console.log(err))
    }
  }, [bid])


  return (
    <>
      <ItemList productos={productos}/>
    </>
  )
}
