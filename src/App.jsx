import { createContext, useState } from 'react'
import { NavBar } from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { CartContainer } from './components/CartContainer/CartContainer'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { EnterCard } from './components/EnterCard/EnterCard'
import { ItemDetailContainer } from './components/ItemListContainer/ItemDetailContainer/ItemDetailContainer'
import { CartContextProvider } from './context/CartContext'
import { Checkout } from './components/Checkout/Checkout'

const AppContext = createContext('fede')


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <NavBar/>
          <Routes>
            <Route path='/' element={<EnterCard/>}/>
            <Route path='/cart' element={<CartContainer/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/category' element={<ItemListContainer/>}/>
            <Route path='/category/:cid' element={<ItemListContainer/>}/>
            <Route path='/detail/:pid' element={<ItemDetailContainer/>}/>

            <Route path='*' element={<Navigate to='/'/>}/>
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App

