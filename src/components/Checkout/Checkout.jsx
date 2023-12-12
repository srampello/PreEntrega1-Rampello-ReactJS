import React, { useState } from 'react'
import { useCartContext } from '../../context/CartContext'
import { useForm } from 'react-hook-form'
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import './Checkout.css'


export const Checkout = () => {

    const [pedidoId, setPedidoId] = useState("")

    const {cartList,  vaciarCart, totalPrecio, removeItem} = useCartContext()

    const {register, formState: { errors }, handleSubmit} = useForm()
    const sent = (data) => {
        const order = {
            client: data,
            products: cartList,
            total: totalPrecio()
        }

        //create
        const db = getFirestore()
        const orderColecction = collection(db, 'orders')
        addDoc(orderColecction, order)
        .then((doc) => {
            setPedidoId(doc.id)
            vaciarCart()
        })
        .catch(err => console.log(err))
    }

    if (pedidoId){
        return (
            <div className="thanks border border-1 rounded p-3 position-absolute top-50 start-50 translate-middle">
                <h1 className='main-title text-light text-center fw-bolder'>Muchas gracias por su compra</h1>
                <p className='text-light text-center'>Pedido N°: {pedidoId}</p>
            </div>
        )
    }

    return (
        <div className='container'>
            <form className='formulario border border-1 rounded p-3 bg-dark' onSubmit={handleSubmit(sent)}>
                <h1 className='main-title fw-bolder'>Finalizar Compra</h1>
                <label htmlFor="">Name</label>
                <input type="text" placeholder='Name' className='form-control ' {...register("name", {
                    required: true,
                })}/>
                {errors.name?.type === 'required' && <p className='text-danger'>* Campo obligatorio</p>}
                <label htmlFor="">E-mail</label>
                <input type="email" placeholder='E-mail' className='form-control' {...register("email", {
                    required: true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                })}/>
                {errors.email?.type === 'required' && <p className='text-danger'>* Campo obligatorio</p>}
                {errors.email?.type === 'pattern' && <p>Formato incorrecto</p>}
                <label htmlFor="">Phone Number</label>
                <input type="phone" placeholder='Cell-phone' className='form-control' {...register("phone", {
                    required: true,
                })}/>
                {errors.phone?.type === 'required' && <p className='text-danger'>* Campo obligatorio</p>}
                <button type='submit' className='btn btn-outline-light'>Send</button>
            </form>
        </div>
    
    ) 
}
