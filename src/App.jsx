import { useState } from 'react'
import { NavBar }from './components/NavBar/NavBar'
//import products from './components/products'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'

//import panda from './components/Image/panda.png';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <ItemListContainer
              key="1" 
              name = "Panda"
              image = "https://i.ibb.co/Gc2KrYp/panda.png"
              alt = "shoe_panda"
              price = "150"
      /> 
      {/*<div className='Products'>
        {products.map( products => (
            <ItemListContainer
              key={products.id} 
              name = {products.name}
              image = {products.image}
              alt = {products.alt}
              price = {products.price}
            /> 
          ) 
        )}
      </div>*/}
    </>
  )
}

export default App

