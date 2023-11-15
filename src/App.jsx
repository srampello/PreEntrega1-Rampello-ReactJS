import { useState } from 'react'
import { NavBar } from './components/NavBar/NavBar'
//import products from './components/products'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { CartContainer } from './components/CartContainer/CartContainer'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ItemDetail } from './components/ItemListContainer/ItemDetail/ItemDetail'
import { EnterCard } from './components/EnterCard/EnterCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        
        <Routes>
          <Route path='/' element={<EnterCard/>}/>
          <Route path='/cart' element={<CartContainer/>}/>
          <Route path='/sneakers' element={<ItemListContainer/>}/>
          <Route path='/detail/:pid' element={<ItemDetail/>}/>
          <Route path='*' element={<Navigate to='/'/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

