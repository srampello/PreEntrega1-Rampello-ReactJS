import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetail } from './ItemDetail/ItemDetail'
import { doc, getDoc, getFirestore} from 'firebase/firestore'
import { Loading } from '../../Loading/Loading'

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)
  const {pid} = useParams()

  useEffect(() => {
    const dbFirestore = getFirestore()
    const dbRef = doc(dbFirestore, 'products', pid)
    getDoc(dbRef)
      .then((resp) =>{setProduct({id: resp.id, ...resp.data()})})
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
  }, [pid])
    
  return (
    loading ?
      <Loading/>
    :
      <ItemDetail product={product}/>
  )
}