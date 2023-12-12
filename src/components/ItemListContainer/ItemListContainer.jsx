import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemList } from './ItemList/ItemList';
import { Loading } from '../Loading/Loading';

import { collection, getDocs, getFirestore, query, where} from 'firebase/firestore'
import { BannerBrand } from '../EnterCard/BannerBrand';


export function ItemListContainer(){
  const [product, setProduct] = useState([])
  const [loading, setloading] = useState(true)
  const {cid} = useParams()

  useEffect(() => {
    const dbFirestore = getFirestore()
    const queryCollection = collection(dbFirestore, 'products')

    const q = cid ? query(queryCollection, where('brand', '==', cid)) : queryCollection;

    getDocs(q)
      .then(resp => setProduct(resp.docs.map(product => ({id : product.id, ...product.data() }))))
      .catch(err => console.log(err))
      .finally(() => setloading(false))
  },[cid])
    
  return (
    <>
      {
        loading ? 
          <Loading/>
        :
          <div>
            <BannerBrand/>
            <ItemList product={product}/>
          </div>
          
      }
    </>
  )
}
