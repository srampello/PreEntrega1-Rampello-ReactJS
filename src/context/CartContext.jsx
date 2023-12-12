import { createContext, useContext, useState } from 'react'

export const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    const isCart = (pid) => cartList.findIndex(product => product.id === pid)
    
    const addProduct = (product) => {
        const indexProduct = isCart(product.id)
        if (indexProduct != -1) {
            cartList[indexProduct].cantidad += product.cantidad
            return setCartList([...cartList])
        }
        setCartList([
            ...cartList,
            product
        ])
    }
    
    const vaciarCart = () => {
        setCartList([])
    }

    //Precio total de productos
    const totalPrecio = () => {
        return cartList.reduce((totalPrice, product) => totalPrice += (product.price * product.cantidad), 0)
    }

    //Cantidad total de productos
    const totalCant = () => cartList.reduce((totalProduct, product) => totalProduct += product.cantidad , 0)

    const removeItem = (id) => {
        setCartList(cartList.filter(prod => prod.id !== id))
    }

    return(
        <CartContext.Provider value={{
            cartList,
            addProduct,
            vaciarCart,
            totalPrecio,
            totalCant,
            removeItem
        }}>
            {children}
        </CartContext.Provider>
    )
}