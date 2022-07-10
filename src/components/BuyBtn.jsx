import React from 'react'
import './BuyBtn.scss'
import {addItemInCart} from  '../redux/cartSlise'
import {useDispatch} from 'react-redux'

function BuyBtn({product}) {
  const dispatch = useDispatch();

  const handleAddItem = ()=>{
    dispatch(addItemInCart(product))
  }
  
  return (
    <button
        onClick={handleAddItem}
        className = "btn primary"
    >
        Добавить в корзину
    </button>
  )
}

export default BuyBtn