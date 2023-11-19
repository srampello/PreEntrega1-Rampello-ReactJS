import { useState } from 'react'
import { NavBar } from './components/NavBar/NavBar'
//import products from './components/products'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { CartContainer } from './components/CartContainer/CartContainer'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { EnterCard } from './components/EnterCard/EnterCard'
import { ItemDetailContainer } from './components/ItemListContainer/ItemDetailContainer/ItemDetailContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<EnterCard/>}/>
          <Route path='/cart' element={<CartContainer/>}/>
          <Route path='/category/:cid' element={<ItemListContainer/>}/>
          <Route path='/category/:cid/:bid' element={<ItemListContainer/>}/>
          <Route path='/detail/:pid' element={<ItemDetailContainer/>}/>

          <Route path='*' element={<Navigate to='/'/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

