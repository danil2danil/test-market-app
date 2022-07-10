import React from 'react'
import './Cart.scss'
import {BsFillTrashFill} from 'react-icons/bs'
import {deleteItemInCart} from '../redux/cartSlise' 
import { useDispatch } from 'react-redux'

function CartItem({item, ...props}) {
    const dispatch = useDispatch();

    const handleDelete = ()=>{
        dispatch(deleteItemInCart(item))
    }

  return (
    <div className="cart__item">
        <h3 className="cart__item-title">
            {props.number}. {item.title}
        </h3>
        <h2 className="cart__item-price">
            {item.price}
        </h2>
        <BsFillTrashFill onClick={handleDelete} style={{width: 25, height: 25, cursor: 'pointer'}}/>
    </div>
  )
}

export default CartItem