import React from 'react'
import './Cart.scss'
import CartItem from './CartItem'
import {addItemInCart} from '../redux/counterSliсe' 
import { useSelector, useDispatch } from 'react-redux'

function Cart() {
    const itemsInCart = useSelector((state)=>state.cart.itemsInCart)

    const cartList = itemsInCart.map((item)=>{
        return(
            <CartItem key={Math.random()} item={item}/>
        )
    })
    
  return (
    <div className='cart'>
        {cartList}
    </div>
  )
}

export default Cart