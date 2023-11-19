import React, { useEffect, useState } from 'react'
import { mProducts } from '../../../helpers/products'
import { useParams } from 'react-router-dom'
import { ItemDetail } from './ItemDetail/ItemDetail'

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})
  const {pid} = useParams()
  
  useEffect(()=>{
    mProducts(pid)
      .then(res => setProduct(res))
      .catch(err => console.log('Error: ', err))
  }, [])

  return (
    <ItemDetail product={product}/>
  )
}